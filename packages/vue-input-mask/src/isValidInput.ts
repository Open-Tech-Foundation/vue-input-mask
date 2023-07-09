import type { Pattern } from './types';

export default function isValidInput(
  char: string,
  curPos: number,
  pattern: Pattern
) {
  const token = pattern[curPos];

  if (typeof token === 'object') {
    return new RegExp(token.pattern).test(
      token.transform ? token.transform(char) : char
    );
  }

  return false;
}
