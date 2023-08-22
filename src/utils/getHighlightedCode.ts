import * as vscode from 'vscode';

export function getHighlightedCode(): string | undefined {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const selectedText = editor.document.getText(editor.selection);
    return selectedText;
  }

  return undefined;
}
