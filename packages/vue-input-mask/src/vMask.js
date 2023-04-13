import { replaceAt } from "@opentf/utils";
import { nextTick } from "vue";

const tokens = {
  "#": { pattern: "[0-9]" },
  $: { pattern: "[A-Za-z]" },
  "*": { pattern: "[A-Za-z0-9]" },
  A: { pattern: "[A-Z]", tranform: (c) => c.toLocaleUpperCase() },
  a: { pattern: "[a-z]", transform: (c) => c.toLocaleLowerCase() },
};

const maskChar = "_";

function mask(newVal, maskPattern) {
  let str = "";
  for (let i = 0; i < maskPattern.length; i++) {
    const token = maskPattern[i];
    const tokenObj = tokens[token];
    if (!tokenObj) {
      str += token;
      continue;
    }
    const regExp = new RegExp(tokenObj.pattern);
    if (!newVal[i] || newVal[i] === maskChar) {
      str += maskChar;
      continue;
    }
    str += regExp.test(newVal[i]) ? newVal[i] : maskChar;
  }

  return str;
}

export default {
  mounted: (el, binding, vnode) => {
    const input =
      el instanceof HTMLInputElement ? el : el.querySelector("input");
    const maskPattern = binding.value;
    let curInputVal = "";

    function setInputVal(val) {
      curInputVal = val;
      input.value = val;
      input.dispatchEvent(new Event("input"));
    }

    function getNextCursorPos(curPos, prevVal, curVal) {
      if (prevVal === curVal) {
        return curPos - 1;
      }
      for (let i = curPos; i < maskPattern.length; i++) {
        if (Object.keys(tokens).includes(maskPattern[i])) {
          return i;
        }
      }

      return curPos;
    }

    function isValidInput(char, curPos) {
      const token = maskPattern[curPos];
      const tokenObj = tokens[token];
      if (!tokenObj) return;
      return new RegExp(tokenObj.pattern).test(char);
    }

    setInputVal(mask(input.value, maskPattern));

    el.addEventListener("input", (e) => {
      const prevInputVal = curInputVal;
      const { selectionStart, value } = e.target;

      switch (e.inputType) {
        case "insertText":
          if (isValidInput(e.data, selectionStart - 1)) {
            const nextChar = value[selectionStart];
            setInputVal(
              mask(
                nextChar === maskChar
                  ? replaceAt(value, selectionStart)
                  : value,
                maskPattern
              )
            );
          } else {
            setInputVal(curInputVal);
          }
          const nextCursorPos = getNextCursorPos(selectionStart, prevInputVal);
          nextTick(() => {
            e.target.setSelectionRange(nextCursorPos, nextCursorPos);
          });
          break;
        case "deleteContentBackward":
          setInputVal(replaceAt(curInputVal, selectionStart, maskChar));
          nextTick(() => {
            e.target.setSelectionRange(selectionStart, selectionStart);
          });
          break;
        case "deleteContentForward":
          break;
        default:
          break;
      }
    });
  },
};
