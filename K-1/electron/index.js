const electron = require("electron");
const {app, Menu, BrowserWindow, crashReporter} = electron;
const width = 1029;
const height = 773;

app.on("window-all-closed", () => app.quit());

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    title: "Riddle Rabbit K-1",
    width: width, height: height,
    minWidth: width, minHeight: height,
    maxWidth: width, maxHeight: height,
    center: true
  });
  app.setAppUserModelId("com.criticalthinking.riddle-rabbit-k-1");
  mainWindow.loadURL(`file://${__dirname}/www/index.html`);
});
