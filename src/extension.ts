import * as vscode from 'vscode';

function getHighlightedCode(): string | undefined {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const selectedText = editor.document.getText(editor.selection);
    return selectedText;
  }

  return undefined;
}

function getFileExtension(): string | undefined {
  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const document = editor.document;
    const fileExtension = document.fileName.split('.').pop();
    return fileExtension;
  }

  return undefined;
}

function addHighlight(text: string): string {
  return `\`\`\`${text}\n\`\`\``;
}

function getTextContent(): string | undefined {
  const highlightedCode = getHighlightedCode();
  const fileExtension = getFileExtension();
  if (highlightedCode && fileExtension) {
    return addHighlight(`${fileExtension}\n${highlightedCode}`);
  }
  return undefined;
}

async function writeToClipboard(text: string): Promise<void> {
  try {
    await vscode.env.clipboard.writeText(text);
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to copy text: ${error}`);
  }
}

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
