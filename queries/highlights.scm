;; =========================
;; Notebook Cell Markers
;; =========================

(notebook_code_cell
  (language_tag) @keyword
  (#set! "priority" 110))

(notebook_markdown_cell
  (language_tag) @keyword
  (#set! "priority" 110))

;; Raw code lines inside code cell -> let injection handle actual highlight
(raw_code_line) @none

;; Markdown cell text
(markdown_text_line) @string.special

(markdown_fenced_block) @comment
