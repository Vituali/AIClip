# AIClip

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

Inspired by the need to streamline code sharing for AI-assisted debugging