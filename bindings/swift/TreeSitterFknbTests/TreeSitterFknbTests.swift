import XCTest
import SwiftTreeSitter
import TreeSitterFknb

final class TreeSitterFknbTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_fknb())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Fknb grammar")
    }
}
