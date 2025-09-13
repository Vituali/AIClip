const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { realizarMerge } = require('./merge-logic');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Escuta o evento 'iniciar-merge' vindo da interface
ipcMain.on('iniciar-merge', (event, opcoes) => {
  try {
    const resultado = realizarMerge(opcoes);
    event.reply('merge-concluido', `Merge de ${resultado.count} arquivos concluído! Salvo em: ${resultado.caminhoSaida}`);
  } catch (error) {
    event.reply('merge-erro', `Ocorreu um erro: ${error.message}`);
  }
});

// Escuta o evento para abrir a caixa de diálogo de seleção de pasta
ipcMain.handle('selecionar-pasta', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory']
  });
  if (!canceled) {
    return filePaths[0];
  }
});