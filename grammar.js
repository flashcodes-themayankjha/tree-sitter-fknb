module.exports = grammar({
  name: 'fknb',

  extras: $ => [/\s/],

  rules: {
    source_file: $ => repeat($.cell),

    cell: $ => choice(
      $.markdown_cell,
      $.code_cell,
      $.fenced_code_cell
    ),

    // --------------------------
    // MARKDOWN CELL
    // --------------------------
    markdown_cell: $ => seq(
      field('marker', $.markdown_marker),
      optional(field('lang', $.markdown_lang)),
      '\n',
      repeat($.markdown_line)
    ),

    markdown_marker: $ => token('#%'),

    markdown_lang: $ => token(/\[markdown\]/),

    markdown_line: $ => token(/[^\n]+/),

    // --------------------------
    // CODE CELL
    // --------------------------
    code_cell: $ => seq(
      field('marker', $.code_marker),
      optional(field('lang', $.language)),
      '\n',
      repeat($.code_line)
    ),

    code_marker: $ => token('#%%'),

    // Accept: python, [python], [ markdown ]
    language: $ => token(/\[?[A-Za-z0-9_+-]+\]?/),

    code_line: $ => token(/[^\n]+/),

    // --------------------------
    // FENCED CODE BLOCKS
    // --------------------------
    fenced_code_cell: $ => seq(
      field('fence_start', $.fence_start),
      optional(field('lang', $.language)),
      '\n',
      repeat($.fenced_line),
      field('fence_end', $.fence_end)
    ),

    fence_start: $ => token('```'),
    fence_end: $ => token('```'),

    fenced_line: $ => token(/[^\n]+/),
  }
})
