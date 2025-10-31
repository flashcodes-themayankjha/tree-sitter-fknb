;; ─────────────────────────────────────────────────────
;; Cell markers
;; ─────────────────────────────────────────────────────

((marker) @keyword)
((language_tag) @type)

;; Markdown cell content
((markdown_text_line) @text)

;; Fenced markdown blocks
((markdown_fenced_block
   fence_open: _ @punctuation.delimiter
   fence_close: _ @punctuation.delimiter))

((markdown_fenced_block
   lang: (language_tag) @type))

;; Code cell raw lines
((raw_code_line) @none)
