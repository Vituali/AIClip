# AIClip

**English | Português**

---

# AIClip (English)

AIClip is a lightweight Electron app that merges project files into a single, clean text file for seamless debugging with AI tools. It automatically skips irrelevant files (e.g., `node_modules`, `package-lock.json`, `.ttf`) and lets you customize exclusions via a user-friendly GUI. Perfect for sharing concise codebases with LLMs or reviewing projects without clutter. Built with Electron for cross-platform support.

## Features

- Recursive file merging for text-based files (JS, HTML, JSON, etc.) with clear separators
- Smart exclusions for binaries, assets (fonts, images), and heavy lockfiles
- Customizable ignore list via GUI for specific files/folders
- Ideal for AI debugging: compact output for pasting into AI chat interfaces
- Runs on Windows, macOS, and Linux

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vituali/AIClip.git
   cd AIClip
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

## Usage

1. Launch AIClip with `npm start`.
2. Click **Select Folder** to choose your project directory.
3. Enter an output filename (e.g., `merge_resultado.txt`).
4. Specify files/folders to ignore (e.g., `.git,node_modules,merge_resultado.txt`) in the textarea.
5. Click **Start Merge** to generate a single text file with your project's code.
6. Find the output file in your project folder, ready for debugging or sharing with AI tools.

## Building for Distribution

To create a standalone executable (e.g., for Windows):

```bash
npm run dist
```

This generates an installer in the `dist/` folder using `electron-builder`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repo and create a branch (`git checkout -b feature/awesome-idea`).
2. Make your changes and test with `npm start`.
3. Commit (`git commit -m "Add awesome feature"`) and push (`git push origin feature/awesome-idea`).
4. Open a Pull Request with details on your changes.

Report bugs or suggest features via GitHub Issues.

## License

This project is licensed under the MIT License. See LICENSE for details.

## Acknowledgments

- Powered by Electron for cross-platform desktop apps
- Inspired by the need to streamline code sharing for AI-assisted debugging

---

# AIClip (Português)

AIClip é um aplicativo Electron leve que combina arquivos de projetos em um único arquivo de texto limpo, ideal para depuração com ferramentas de IA. Ele ignora automaticamente arquivos irrelevantes (como `node_modules`, `package-lock.json`, `.ttf`) e permite personalizar exclusões por meio de uma interface amigável. Perfeito para compartilhar códigos concisos com LLMs ou revisar projetos sem bagunça. Construído com Electron para suporte multiplataforma.

## Recursos

- Combinação recursiva de arquivos de texto (JS, HTML, JSON, etc.) com separadores claros
- Exclusão inteligente de binários, assets (fontes, imagens) e lockfiles pesados
- Lista de exclusão personalizável via interface gráfica
- Ideal para depuração com IA: saída compacta para colar em chats de IA
- Funciona em Windows, macOS e Linux

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Vituali/AIClip.git
   cd AIClip
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o aplicativo:

   ```bash
   npm start
   ```

## Uso

1. Inicie o AIClip com `npm start`.
2. Clique em **Selecionar Pasta** para escolher o diretório do projeto.
3. Insira um nome para o arquivo de saída (ex.: `merge_resultado.txt`).
4. Especifique arquivos/pastas a ignorar (ex.: `.git,node_modules,merge_resultado.txt`) no campo de texto.
5. Clique em **Iniciar Merge** para gerar um único arquivo de texto com o código do projeto.
6. Encontre o arquivo de saída na pasta do projeto, pronto para depuração ou compartilhamento com ferramentas de IA.

## Compilando para Distribuição

Para criar um executável independente (ex.: para Windows):

```bash
npm run dist
```

Isso gera um instalador na pasta `dist/` usando o `electron-builder`.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório e crie uma branch (`git checkout -b feature/nova-ideia`).
2. Faça suas alterações e teste com `npm start`.
3. Commit (`git commit -m "Adiciona nova funcionalidade"`) e push (`git push origin feature/nova-ideia`).
4. Abra um Pull Request com detalhes das suas alterações.

Reporte bugs ou sugira funcionalidades via GitHub Issues.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para detalhes.

## Agradecimentos

- Desenvolvido com Electron para aplicativos desktop multiplataforma
- Inspirado na necessidade de simplificar o compartilhamento de código para depuração com IA