import * as vscode from 'vscode';

export async function writeToClipboard(text: string): Promise<void> {
  try {
    await vscode.env.clipboard.writeText(text);
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to copy text: ${error}`);
  }
}
