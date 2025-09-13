AIClip
A lightweight Electron app that merges project files into a single, clean text file for seamless debugging with AI tools. AIClip automatically skips irrelevant files (e.g., node_modules, package-lock.json, .ttf) and lets you customize exclusions via a user-friendly GUI. Perfect for sharing concise codebases with LLMs or reviewing projects without clutter. Built with Electron and a touch of React-inspired simplicity.
Features

Recursive File Merging: Combines all text-based files (JS, HTML, JSON, etc.) into one file with clear separators.
Smart Exclusions: Ignores binary files, assets (e.g., fonts, images), and heavy lockfiles by default.
Customizable Ignore List: Add specific files or folders to skip via the GUI.
Ideal for AI Debugging: Creates compact outputs for easy pasting into AI chat interfaces.
Cross-Platform: Runs on Windows, macOS, and Linux via Electron.

Installation

Clone the repository:git clone https://github.com/Vituali/AIClip.git
cd AIClip


Install dependencies:npm install


Run the app:npm start



Usage

Launch AIClip (npm start).
Click Select Folder to choose your project directory.
Enter an output filename (e.g., merge_resultado.txt).
Specify files/folders to ignore (e.g., .git,node_modules,merge_resultado.txt) in the textarea.
Click Start Merge to generate a single text file with your project's code.
Check the output file in your project folder, ready for debugging or sharing with an AI tool.

Building for Distribution
To create a standalone executable (e.g., for Windows):
npm run dist

This generates an installer in the dist/ folder using electron-builder.
Contributing
We love contributions! To get started:

Fork the repo and create a branch (git checkout -b feature/awesome-idea).
Make your changes and test with npm start.
Commit (git commit -m "Add awesome feature") and push (git push origin feature/awesome-idea).
Open a Pull Request with details on your changes.

Please report bugs or suggest features via GitHub Issues.
License
This project is licensed under the MIT License. See LICENSE for details.
Acknowledgments

Built with Electron for cross-platform desktop apps.
Inspired by the need to streamline code sharing for AI-assisted debugging.
