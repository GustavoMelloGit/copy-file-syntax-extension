import * as vscode from 'vscode';

export function getFileExtension(): string | undefined {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const document = editor.document;
    const fileExtension = document.fileName.split('.').pop();
    return fileExtension;
  }

  return undefined;
}
