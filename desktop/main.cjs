"use strict";

const { app, BrowserWindow, dialog, protocol, shell } = require("electron");
const fs = require("node:fs");
const path = require("node:path");

const APP_SCHEME = "coconut-ledger";
const APP_URL = `${APP_SCHEME}://app/index.html`;
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "object-src 'none'",
  "base-uri 'none'",
  "frame-src 'none'",
  "form-action 'self'",
].join("; ");

protocol.registerSchemesAsPrivileged([
  {
    scheme: APP_SCHEME,
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
      stream: true,
    },
  },
]);

app.setName("Coconut Ledger");
app.setPath("userData", path.join(app.getPath("appData"), "CyberTech Lanka", "Coconut Ledger"));
if (process.platform === "win32") app.setAppUserModelId("com.estateledger.coconut.desktop");

let mainWindow;
let pagePath;

function isAppUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === `${APP_SCHEME}:` && url.hostname === "app" && url.pathname === "/index.html";
  } catch (error) {
    return false;
  }
}

function openExternal(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "mailto:") return;
    void shell.openExternal(url.href).catch((error) => {
      console.error("Could not open external link:", error);
    });
  } catch (error) {
    console.warn("Blocked an invalid external link.");
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 900,
    minWidth: 900,
    minHeight: 640,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    openExternal(url);
    return { action: "deny" };
  });

  const preventExternalNavigation = (event, url) => {
    if (isAppUrl(url)) return;
    event.preventDefault();
    openExternal(url);
  };
  mainWindow.webContents.on("will-navigate", preventExternalNavigation);
  mainWindow.webContents.on("will-redirect", preventExternalNavigation);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  void mainWindow.loadURL(APP_URL).catch((error) => {
    console.error("Could not load the Coconut Ledger page:", error);
    dialog.showErrorBox("Coconut Ledger could not start", "The bundled app page could not be loaded.");
  });
}

async function startApp() {
  pagePath = path.join(app.getAppPath(), "android", "app", "src", "main", "assets", "index.html");
  await fs.promises.access(pagePath, fs.constants.R_OK);

  protocol.handle(APP_SCHEME, async (request) => {
    const url = new URL(request.url);
    if (request.method !== "GET" || url.hostname !== "app" || url.pathname !== "/index.html")
      return new Response("Not found", { status: 404 });

    try {
      const html = await fs.promises.readFile(pagePath);
      return new Response(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Security-Policy": CSP,
        },
      });
    } catch (error) {
      console.error("Could not read the bundled Coconut Ledger page:", error);
      return new Response("The Coconut Ledger page could not be read.", { status: 500 });
    }
  });

  createWindow();
}

const hasSingleInstanceLock = app.requestSingleInstanceLock();
if (!hasSingleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  app.whenReady().then(startApp).catch((error) => {
    console.error("Coconut Ledger failed to start:", error);
    dialog.showErrorBox(
      "Coconut Ledger could not start",
      "The app page is missing or unreadable. Run the desktop build command again.",
    );
    app.quit();
  });

  app.on("window-all-closed", () => {
    app.quit();
  });
}
