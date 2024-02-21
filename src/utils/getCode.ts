import * as vscode from 'vscode';

export function getCode(): string | undefined {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return undefined;
  }
  const { selection, document } = editor;

  const selectedText = document.getText(selection);
  const hasSelectedText = selectedText !== '';
  if (hasSelectedText) {
    return selectedText;
  }

  const line = document.lineAt(selection.start.line);
  const lineText = line.text;

  if (lineText !== '') {
    return lineText;
  }

  return undefined;
}
