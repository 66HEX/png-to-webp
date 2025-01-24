const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  selectFiles: () => ipcRenderer.invoke('dialog:openFile'),
  selectSaveDirectory: () => ipcRenderer.invoke('dialog:saveDirectory'),
  convertFiles: (files, quality, outputDir) => ipcRenderer.invoke('convert:webp', files, quality, outputDir)
})