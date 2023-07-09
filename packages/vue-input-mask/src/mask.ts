import { maskChar } from './constants';
import { Pattern } from './types';

export default function mask(val: string, maskPattern: Pattern) {
  let str = '';
  let valCur = 0;

  for (let i = 0; i < maskPattern.length; i++) {
    let match = false;
    const token = maskPattern[i];

    if (typeof token === 'string') {
      str += token;
      continue;
    }

    for (let j = valCur; j < val.length; j++) {
      let char = val[j];
      valCur++;
      const regExp = new RegExp(token.pattern);

      if (token.transform) {
        char = token.transform(char);
      }

      if (regExp.test(char)) {
        str += char;
        match = true;
        break;
      }
    }

    if (!match) {
      str += maskChar;
    }
  }

  return str;
}
