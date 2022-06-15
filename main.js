const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 801,
      height: 620,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration:false
      },
      //frame:false,
      resizable:false,
      maximizable:false,
      transparent:true,
      //autoHideMenuBar: true,
      title: 'ElectricalV'
    })
  
    win.loadFile('welcomeScreen/index.html')
}

ipcMain.on('close-me', (evt, arg) => {
   app.quit();
});

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})