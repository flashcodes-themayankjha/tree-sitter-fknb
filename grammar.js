// Author: Mayank Jha

module.exports = grammar({
  name: 'fknb',

  extras: $ => [/\s/],

  rules: {
    source_file: $ => repeat($.notebook_cell),

    notebook_cell: $ => choice(
      $.notebook_markdown_cell,
      $.notebook_code_cell
    ),

    //
    // MARKDOWN CELL
    //

    notebook_markdown_cell: $ => seq(
      field('marker', '#%'),
      optional(field('lang', $.language_markdown)),
      '\n',
      repeat($._markdown_block)
    ),

    language_markdown: $ => /\[markdown\]/,

    _markdown_block: $ => choice(
      $.markdown_fenced_block,
      $.markdown_text_line
    ),

    markdown_text_line: $ => /[^\n]+/,

    markdown_fenced_block: $ => seq(
      field('fence_open', '```'),
      optional(field('lang', $.language_tag)),
      '\n',
      repeat(choice(/[^\n]+/, '\n')),
      field('fence_close', '```')
    ),

    //
    // EXECUTABLE CODE CELL
    //

    notebook_code_cell: $ => seq(
      field('marker', '#%%'),
      optional(field('lang', $.language_tag)),
      '\n',
      repeat($.raw_code_line)
    ),

    raw_code_line: $ => /[^\n]+/,

    language_tag: $ => /\[[A-Za-z0-9_+\-]+\]/,
  }
});
