import { getFileExtension } from './getFileExtension';
import { getHighlightedCode } from './getHighlightedCode';

function addHighlight(text: string): string {
  return `\`\`\`${text}\n\`\`\``;
}

export function getTextContent(): string | undefined {
  const highlightedCode = getHighlightedCode();
  const fileExtension = getFileExtension();
  if (highlightedCode && fileExtension) {
    return addHighlight(`${fileExtension}\n${highlightedCode}`);
  }
  return undefined;
}
