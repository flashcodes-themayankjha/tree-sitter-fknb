;; ─────────────────────────────────────────────────────
;; Inject markdown grammar inside markdown cell body
;; ─────────────────────────────────────────────────────

((notebook_markdown_cell
  (markdown_text_line) @markdown))

((markdown_fenced_block
  (language_tag) @injection.language
  (#match? @injection.language "^[A-Za-z0-9_+-]+$"))
  (markdown_fenced_block) @injection.content)

;; fallback fenced code in markdown — if no language tag, treat as markdown
((markdown_fenced_block) @markdown)


;; ─────────────────────────────────────────────────────
;; Inject real language inside code cell body
;; ─────────────────────────────────────────────────────
(notebook_code_cell
  (language_tag) @lang
  (raw_code_line) @injected_content
  (#set! injected.language @lang))
