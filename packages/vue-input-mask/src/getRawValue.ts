import { maskChar } from './constants';
import type { Pattern } from './types';

export default function getRawValue(val: string, pattern: Pattern) {
  let str = '';
  for (let i = 0; i < pattern.length; i++) {
    const char = val[i];
    const token = pattern[i];

    if (typeof token === 'object' && char !== maskChar) {
      str += char;
    }
  }

  return str;
}
