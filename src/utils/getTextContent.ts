import { getCode } from './getCode';
import { getFileExtension } from './getFileExtension';

function addHighlight(text: string): string {
  return `\`\`\`${text}\n\`\`\``;
}

export function getTextContent(): string | undefined {
  const highlightedCode = getCode();
  const fileExtension = getFileExtension();
  if (highlightedCode && fileExtension) {
    return addHighlight(`${fileExtension}\n${highlightedCode}`);
  }
  return undefined;
}
