console.log('>> preload.js');
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

// REF: https://www.electronjs.org/docs/latest/tutorial/ipc

contextBridge.exposeInMainWorld('myBridge', {

  sendIPCTest: (inputText) => {
    ipcRenderer.send("on-ipc-test", inputText);
  },

  logToRenderer: (inputText) => {
    return ipcRenderer.invoke("log-to-renderer", inputText);
  }
});