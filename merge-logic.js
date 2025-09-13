const fs = require('fs');
const path = require('path');

// Lista de extensões que devem ser IGNORADAS.
const extensoesExcluidas = [  
  // Imagens
  '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg', '.webp', '.ico',
  
  // Arquivos compactados
  '.zip', '.rar', '.7z', '.tar', '.gz',
  
  // Outros binários ou que não fazem sentido no merge
  '.exe', '.dll', '.so', '.class', '.jar', '.war', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.o',
  
  // Fontes
  '.ttf', '.otf', '.woff', '.woff2'  // Adicionado para excluir fontes
];

// Lista de arquivos específicos para ignorar
const arquivosIgnorar = [
  'package-lock.json'
];

// Lista de pastas a ignorar por padrão
const pastasIgnorarPadrao = [
  'node_modules',
  'dist',
  'build',
  '.git',
  'coverage',
  '.vscode',
  'node_modules/.cache',
  'assets/fonts',  // Nova: ignora pasta de fontes
  'assets/extension',  // Nova: ignora pasta com ZIPs (baseado na memória)
  'assets/images'  // Nova: ignora pasta com imagens
];

// Função para ler arquivos recursivamente
function lerArquivosRecursivo(pasta, ignorar) {
  let arquivosTodos = [];
  if (!fs.existsSync(pasta)) return arquivosTodos;

  const itens = fs.readdirSync(pasta);
  itens.forEach(item => {
    if (ignorar.includes(item)) return;

    const itemPath = path.join(pasta, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      arquivosTodos = arquivosTodos.concat(lerArquivosRecursivo(itemPath, ignorar));
    } else {
      const extensao = path.extname(itemPath).toLowerCase();
      const nomeArquivo = path.basename(itemPath);
      if (!extensoesExcluidas.includes(extensao) && !arquivosIgnorar.includes(nomeArquivo)) {
        arquivosTodos.push(itemPath);
      }
    }
  });
  return arquivosTodos;
}

// Função principal de merge
function realizarMerge(opcoes) {
  const { pasta, nomeArquivo, ignorar } = opcoes;

  let conteudoFinal = '';
  
  const listaIgnorarCompleta = [...pastasIgnorarPadrao, ...ignorar, nomeArquivo];
  
  console.log(`Ignorando pastas: ${listaIgnorarCompleta.join(', ')}`);
  console.log(`Ignorando arquivos específicos: ${arquivosIgnorar.join(', ')}`);
  
  const arquivos = lerArquivosRecursivo(pasta, listaIgnorarCompleta);

  arquivos.forEach(filePath => {
    try {
      const fileConteudo = fs.readFileSync(filePath, 'utf-8');
      const relativePath = path.relative(pasta, filePath);
      conteudoFinal += `\n\n// --- ${relativePath} ---\n\n`;
      conteudoFinal += fileConteudo;
    } catch (err) {
      console.warn(`Aviso: Não foi possível ler o arquivo ${filePath} como texto. Ignorando.`);
    }
  });

  const caminhoSaida = path.join(pasta, nomeArquivo);
  fs.writeFileSync(caminhoSaida, conteudoFinal);
  
  console.log(`Merge concluído: ${caminhoSaida}`);
  return { caminhoSaida, count: arquivos.length };
}

module.exports = { realizarMerge };