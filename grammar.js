/**
 * @file An Advance parcer for FkNB and Jupyter .ipynb files 
 * @author Mayank Kumar Jha <mayank.flashcodes@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fknb",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
