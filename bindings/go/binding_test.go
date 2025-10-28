package tree_sitter_fknb_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fknb "github.com/flashcodes-themayankjha/tree-sitter-fknb.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fknb.Language())
	if language == nil {
		t.Errorf("Error loading Fknb grammar")
	}
}
