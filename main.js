const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const sharp = require('sharp')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 500,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('dialog:openFile', async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
    filters: [{ name: 'Images', extensions: ['png'] }]
  })
  return filePaths
})

ipcMain.handle('dialog:saveDirectory', async () => {
  const { filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory']
  })
  return filePaths[0]
})

ipcMain.handle('convert:webp', async (event, files, quality, outputDir) => {
  const results = []
  for (const file of files) {
    try {
      const fileName = path.basename(file).replace('.png', '.webp')
      const outputPath = path.join(outputDir, fileName)
      await sharp(file)
        .webp({ quality: parseInt(quality) })
        .toFile(outputPath)
      results.push({ success: true, file: outputPath })
    } catch (error) {
      results.push({ success: false, file, error: error.message })
    }
  }
  return results
})