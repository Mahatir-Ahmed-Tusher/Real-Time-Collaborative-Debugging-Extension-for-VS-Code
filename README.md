# Real-Time Collaborative Debugging Extension for VS Code

A powerful VS Code extension that enables real-time collaborative debugging between multiple developers. This extension synchronizes breakpoints, variable states, and stack traces across different development environments, making remote debugging and pair programming more efficient than ever. This project is still in initial stage. I am looking out for help and contributions.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue.svg)](https://marketplace.visualstudio.com/items?itemName=mahatir-ahmed.vscode-collab-debug)

## Features

- **Real-Time Synchronization**
  - Live syncing of breakpoints across all connected developers
  - Shared variable states and stack traces
  - Instant updates when debugging steps are performed

- **Role-Based Access Control**
  - Define different access levels (admin, contributor, viewer)
  - Control who can modify breakpoints and execute debug commands
  - Secure sharing of debugging sessions

- **Built-in Collaboration Tools**
  - Session management through an intuitive sidebar
  - Real-time participant list with online status
  - Secure session sharing via unique session IDs

## Installation

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Run `ext install vscode-collab-debug`

Or install it directly from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=mahatir-ahmed.vscode-collab-debug)

## Getting Started

### Starting a New Session

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Start Collaborative Debugging Session"
3. Share the generated session ID with your teammates

### Joining an Existing Session

1. Open the Command Palette
2. Type "Join Collaborative Debugging Session"
3. Enter the session ID provided by the session host

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- VS Code

### Local Development

```bash
# Clone the repository
git clone https://github.com/Mahatir-Ahmed-Tusher/vscode-collab-debug.git

# Navigate to project directory
cd vscode-collab-debug

# Install dependencies
npm install

# Compile the extension
npm run compile

# Open the project in VS Code
code .
```

### Running and Debugging

1. Press `F5` to start debugging
2. A new VS Code window will open with the extension loaded
3. Use the Command Palette to test extension features

## Project Structure

```
vscode-collab-debug/
├── src/                  # Source code
│   ├── core/            # Core debugging functionality
│   ├── ui/              # UI components
│   └── utils/           # Utility functions
├── media/               # Icons and assets
├── test/                # Test files
└── out/                 # Compiled files
```

## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please make sure to:
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

## Roadmap

- [ ] Add support for more IDEs
- [ ] Implement video chat feature
- [ ] Add custom debugging views
- [ ] Support for debugging across different programming languages
- [ ] Cloud storage for debugging sessions

## Contact & Support

- **Developer**: Mahatir Ahmed Tusher
- **Email**: mahatirtusher@gmail.com
- **GitHub**: [@Mahatir-Ahmed-Tusher](https://github.com/Mahatir-Ahmed-Tusher)

For bug reports and feature requests, please [open an issue](https://github.com/Mahatir-Ahmed-Tusher/vscode-collab-debug/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- VS Code Extension API Documentation
- Socket.IO team for the real-time communication library
- All contributors who have helped with issues and pull requests

---

Made with ❤️ by [Mahatir Ahmed Tusher](https://github.com/Mahatir-Ahmed-Tusher)
