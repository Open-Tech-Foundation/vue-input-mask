import { replaceAt } from '@opentf/utils';
import { nextTick } from 'vue';

const tokens = {
  '#': { pattern: '[0-9]' },
  $: { pattern: '[A-Za-z]' },
  '*': { pattern: '[A-Za-z0-9]' },
  A: { pattern: '[A-Z]', transform: (c) => c.toLocaleUpperCase() },
  a: { pattern: '[a-z]', transform: (c) => c.toLocaleLowerCase() },
};

const maskChar = '_';

function load(val = '', maskPattern) {
  let str = '';
  let valCount = 0;
  for (let i = 0; i < maskPattern.length; i++) {
    let char = val[valCount];
    const token = maskPattern[i];

    if (typeof token === 'string') {
      str += token;
      continue;
    }

    if (!char || char === maskChar) {
      str += maskChar;
      continue;
    }

    const regExp = new RegExp(token.pattern);
    if (token.transform) {
      char = token.transform(char);
    }
    str += regExp.test(char) ? char : maskChar;
    valCount++;
  }

  return str;
}

function mask(newVal, maskPattern) {
  let str = '';
  for (let i = 0; i < maskPattern.length; i++) {
    let char = newVal[i];
    const token = maskPattern[i];

    if (typeof token === 'string') {
      str += token;
      continue;
    }

    if (!char || char === maskChar) {
      str += maskChar;
      continue;
    }

    const regExp = new RegExp(token.pattern);
    if (token.transform) {
      char = token.transform(char);
    }
    str += regExp.test(char) ? char : maskChar;
  }

  return str;
}

function parseMask(mask = [], tokens) {
  const arr = [];

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

export default {
  mounted: (el, binding) => {
    const input =
      el instanceof HTMLInputElement ? el : el.querySelector('input');
    const options = {
      maskPattern: parseMask(binding.value.mask, {
        ...tokens,
        ...(binding.value.tokens || {}),
      }),
      raw: binding.value.raw,
    };
    let curInputVal = '';

    function getRawValue(val) {
      let str = '';
      for (let i = 0; i < options.maskPattern.length; i++) {
        let char = val[i];
        const token = options.maskPattern[i];

        if (typeof token === 'object' && char !== maskChar) {
          str += char;
        }
      }

      return str;
    }

    function setInputVal(val) {
      curInputVal = val;
      input.value = val;
      input.dispatchEvent(new Event('input'));
      if (options.raw) {
        options.raw(getRawValue(val));
      }
    }

    function isValidInput(char, curPos) {
      let c = char;
      const token = options.maskPattern[curPos];

      if (!token) return;

      if (token.transform) {
        c = token.transform(c);
      }

      return new RegExp(token.pattern).test(c);
    }

    // Init with placeholders
    setInputVal(load(input.value, options.maskPattern));

    function setCursorPos(e, start, end) {
      let pos = input.value.indexOf(maskChar);
      pos = pos === -1 ? start : pos;
      nextTick(() => {
        e.target.setSelectionRange(pos, start === end ? pos : end);
      });
    }

    input.addEventListener('focus', (e) => {
      setCursorPos(e);
    });

    input.addEventListener('click', (e) => {
      setCursorPos(e, e.target.selectionStart, e.target.selectionEnd);
    });

    el.addEventListener('input', (e) => {
      const { selectionStart, selectionEnd, value } = e.target;

      function handleInsert() {
        if (isValidInput(e.data, selectionStart - 1)) {
          setInputVal(
            mask(replaceAt(value, selectionStart), options.maskPattern)
          );
        } else {
          setInputVal(curInputVal);
        }
        setCursorPos(e, selectionStart, selectionEnd);
      }

      switch (e.inputType) {
        case '':
        case 'insertText':
          handleInsert();
          break;
        case 'deleteContentBackward':
          if (typeof options.maskPattern[selectionStart] === 'string') {
            setInputVal(curInputVal);
          } else {
            setInputVal(replaceAt(curInputVal, selectionStart, maskChar));
          }
          nextTick(() => {
            e.target.setSelectionRange(selectionStart, selectionStart);
          });
          break;
        case 'deleteContentForward':
          if (typeof options.maskPattern[selectionStart] === 'string') {
            setInputVal(curInputVal);
          } else {
            setInputVal(replaceAt(curInputVal, selectionStart, maskChar));
          }
          nextTick(() => {
            e.target.setSelectionRange(selectionStart + 1, selectionStart + 1);
          });
          break;
      }
    });
  },
};
