import { replaceAt } from '@opentf/utils';
import { nextTick } from 'vue';
import { maskChar, tokens } from './constants';
import parseMask from './parseMask';
import mask from './mask';
import getRawValue from './getRawValue';
import isValidInput from './isValidInput';
import type { Binding, Token } from './types';

export default {
  mounted: (el: HTMLElement, binding: Binding) => {
    let isFocus = false;
    const input =
      el instanceof HTMLInputElement ? el : el.querySelector('input');

    if (input === null || !binding.value.mask) {
      return;
    }

    const options = {
      maskPattern: parseMask(binding.value.mask, {
        ...tokens,
        ...(binding.value.tokens || {}),
      }),
      raw: binding.value.raw,
    };
    let curInputVal = '';

    // Init with placeholders
    nextTick(() => {
      setInputVal(mask(input.value, options.maskPattern));
    });

    function setInputVal(val: string) {
      curInputVal = val;
      (input as HTMLInputElement).value = val;
      (input as HTMLInputElement).dispatchEvent(new Event('input'));
      if (options.raw) {
        options.raw(getRawValue(val, options.maskPattern));
      }
    }

    function setCursorPos(e: Event, start: number, end: number) {
      const pos = (input as HTMLInputElement).value.indexOf(maskChar);
      nextTick(() => {
        (e.target as HTMLInputElement).setSelectionRange(
          pos === -1 ? start : pos,
          start === end ? pos : end
        );
      });
    }

    input.addEventListener('focus', (e) => {
      setCursorPos(e, 0, 0);
    });

    input.addEventListener('blur', () => {
      isFocus = false;
    });

    input.addEventListener('click', (e) => {
      if (!isFocus) {
        setCursorPos(e, 0, 0);
        isFocus = true;
      }
    });

    el.addEventListener('input', (e) => {
      const { selectionStart, selectionEnd, value } =
        e.target as HTMLInputElement;
      const data = (e as InputEvent).data as string;

      function handleInsert() {
        if (
          isValidInput(
            data,
            (selectionStart as number) - 1,
            options.maskPattern
          )
        ) {
          const pat = options.maskPattern[
            (selectionStart as number) - 1
          ] as Token;
          const insertStr = pat.transform ? pat.transform(data) : data;
          const str =
            value.substring(0, (selectionStart as number) - 1) +
            insertStr +
            value.substring((selectionStart as number) + 1);
          setInputVal(str);
        } else {
          setInputVal(curInputVal);
        }
        setCursorPos(e, selectionStart as number, selectionEnd as number);
      }

      switch ((e as InputEvent).inputType) {
        case '':
        case 'insertText':
          handleInsert();
          break;
        case 'deleteContentBackward':
          if (
            typeof options.maskPattern[selectionStart as number] === 'string'
          ) {
            setInputVal(curInputVal);
          } else {
            setInputVal(
              replaceAt(curInputVal, selectionStart as number, maskChar)
            );
          }
          nextTick(() => {
            (e.target as HTMLInputElement).setSelectionRange(
              selectionStart,
              selectionStart
            );
          });
          break;
        case 'deleteContentForward':
          if (
            typeof options.maskPattern[selectionStart as number] === 'string'
          ) {
            setInputVal(curInputVal);
          } else {
            setInputVal(
              replaceAt(curInputVal, selectionStart as number, maskChar)
            );
          }
          nextTick(() => {
            (e.target as HTMLInputElement).setSelectionRange(
              (selectionStart as number) + 1,
              (selectionStart as number) + 1
            );
          });
          break;
      }
    });
  },
};
