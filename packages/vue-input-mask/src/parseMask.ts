import { Pattern, Token } from './types';

export default function parseMask(mask: string, tokens: Record<string, Token>) {
  const arr: Pattern = [];

  for (let i = 0; i < mask.length; i++) {
    const c = mask[i];
    if (Object.keys(tokens).includes(c)) {
      arr.push(tokens[c]);
      continue;
    }

    if (c === '\\') {
      arr.push(mask[i + 1]);
      i++;
      continue;
    }

    if (c === '{') {
      let pat = '';
      for (let j = i + 1; j < mask.length; j++) {
        if (mask[j] === '}') {
          arr.push({ pattern: pat });
          i += pat.length + 1;
          break;
        } else {
          pat += mask[j];
        }
      }
      continue;
    }

    arr.push(c);
  }

  return arr;
}
