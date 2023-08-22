import * as vscode from 'vscode';
import { getTextContent } from './utils/getTextContent';
import { writeToClipboard } from './utils/writeToClipboard';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'copy-file-syntax.copyText',
    () => {
      const textWithHighlight = getTextContent();
      if (textWithHighlight) {
        writeToClipboard(textWithHighlight).then(() => {
          vscode.window.showInformationMessage('Copied successfully!');
        });
      } else {
        vscode.window.showInformationMessage('Could not copy code ;(');
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
