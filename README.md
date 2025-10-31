# tree-sitter-fknb

[![NPM version](https://img.shields.io/npm/v/tree-sitter-fknb.svg)](https://www.npmjs.com/package/tree-sitter-fknb)
[![Build Status](https://img.shields.io/travis/flashcodes-themayankjha/tree-sitter-fknb.svg)](https://travis-ci.org/flashcodes-themayankjha/tree-sitter-fknb)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An advanced Tree-sitter parser for `fknb` and Jupyter `.ipynb` files.

## Overview

This project provides a Tree-sitter grammar for `.fknb` files, a notebook format similar to Jupyter's `.ipynb`. The grammar is designed to parse code cells and markdown cells, enabling robust syntax highlighting, code navigation, and other language features in editors that support Tree-sitter.

The parser is designed to be:

- **Performant:** Built with Tree-sitter for efficient incremental parsing.
- **Accurate:** Provides a detailed and accurate syntax tree for `.fknb` files.
- **Extensible:** Can be used to build tools for code analysis, formatting, and more.

## Installation

You can install the parser using npm:

```sh
npm install tree-sitter-fknb tree-sitter
```

## Usage

Here's how you can use the parser in a Node.js project:

```javascript
const Parser = require('tree-sitter');
const FKNb = require('tree-sitter-fknb');

const parser = new Parser();
parser.setLanguage(FKNb);

const sourceCode = `
#%[markdown]
# This is a markdown cell

This is some text.

#%%[python]
print("Hello, world!")
`;

const tree = parser.parse(sourceCode);
console.log(tree.rootNode.toString());
```

## Development

To work on the grammar locally, you'll need to have Node.js and the Tree-sitter CLI installed.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/flashcodes-themayankjha/tree-sitter-fknb.git
    cd tree-sitter-fknb
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Generate the parser:**
    ```sh
    npx tree-sitter generate
    ```

4.  **Run the tests:**
    ```sh
    npm test
    ```

5.  **Open the playground:**
    ```sh
    npm start
    ```
    This will open the Tree-sitter playground, where you can test the grammar with sample code.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.