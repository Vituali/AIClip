// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  iniciarMerge: (opcoes) => ipcRenderer.send('iniciar-merge', opcoes),
  onMergeConcluido: (callback) => ipcRenderer.on('merge-concluido', (_event, value) => callback(value)),
  onMergeErro: (callback) => ipcRenderer.on('merge-erro', (_event, value) => callback(value)),
  selecionarPasta: () => ipcRenderer.invoke('selecionar-pasta')
});