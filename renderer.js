// renderer.js
const btnSelecionarPasta = document.getElementById('btnSelecionarPasta');
const inputPasta = document.getElementById('pasta');
const btnMerge = document.getElementById('btnMerge');
const statusDiv = document.getElementById('status');
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ignorar').placeholder = 'Ex: node_modules, dist, build';
});
btnSelecionarPasta.addEventListener('click', async () => {
  const caminhoPasta = await window.electronAPI.selecionarPasta();
  if (caminhoPasta) {
    inputPasta.value = caminhoPasta;
  }
});

btnMerge.addEventListener('click', () => {
  const pasta = inputPasta.value;
  const nomeArquivo = document.getElementById('nomeArquivo').value;
  const ignorar = document.getElementById('ignorar').value.split(',').map(item => item.trim());

  if (!pasta || !nomeArquivo) {
    statusDiv.textContent = 'Erro: Selecione uma pasta e defina um nome para o arquivo de saída.';
    statusDiv.style.color = 'red';
    return;
  }

  statusDiv.textContent = 'Processando...';
  statusDiv.style.color = 'black';

  const opcoes = {
    pasta,
    nomeArquivo,
    ignorar
  };

  window.electronAPI.iniciarMerge(opcoes);
});

window.electronAPI.onMergeConcluido((mensagem) => {
  statusDiv.textContent = mensagem;
  statusDiv.style.color = 'green';
});

window.electronAPI.onMergeErro((mensagem) => {
  statusDiv.textContent = mensagem;
  statusDiv.style.color = 'red';
});