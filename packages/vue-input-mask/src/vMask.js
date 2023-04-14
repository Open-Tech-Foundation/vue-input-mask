import { replaceAt } from "@opentf/utils";
import { nextTick } from "vue";

const tokens = {
  "#": { pattern: "[0-9]" },
  $: { pattern: "[A-Za-z]" },
  "*": { pattern: "[A-Za-z0-9]" },
  A: { pattern: "[A-Z]", transform: (c) => c.toLocaleUpperCase() },
  a: { pattern: "[a-z]", transform: (c) => c.toLocaleLowerCase() },
};

const maskChar = "_";

function mask(newVal, maskPattern) {
  let str = "";
  for (let i = 0; i < maskPattern.length; i++) {
    let char = newVal[i];
    const token = maskPattern[i];

    if (typeof token === "string") {
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

function parseMask(mask = []) {
  const arr = [];

  for (let i = 0; i < mask.length; i++) {
    const c = mask[i];
    if (Object.keys(tokens).includes(c)) {
      arr.push(tokens[c]);
      continue;
    }

    if (c === "\\") {
      arr.push(mask[i + 1]);
      i++;
      continue;
    }

    if (c === "{") {
      let pat = "";
      for (let j = i + 1; j < mask.length; j++) {
        if (mask[j] === "}") {
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
      el instanceof HTMLInputElement ? el : el.querySelector("input");
    const options = {
      maskPattern: parseMask(binding.value.mask),
    };
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
      for (let i = curPos; i < options.maskPattern.length; i++) {
        if (Object.keys(tokens).includes(options.maskPattern[i])) {
          return i;
        }
      }

      return curPos;
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
    setInputVal(mask(input.value, options.maskPattern));

    function setCursorPos(e, selectionStart) {
      let pos = input.value.indexOf(maskChar);
      pos = pos === -1 ? selectionStart : pos;
      nextTick(() => {
        e.target.setSelectionRange(pos, pos);
      });
    }

    input.addEventListener("focus", (e) => {
      setCursorPos(e);
    });

    input.addEventListener("click", (e) => {
      setCursorPos(e);
    });

    el.addEventListener("input", (e) => {
      const prevInputVal = curInputVal;
      const { selectionStart, value } = e.target;

      function handleInsert() {
        if (isValidInput(e.data, selectionStart - 1)) {
          const nextChar = value[selectionStart];
          setInputVal(
            mask(replaceAt(value, selectionStart), options.maskPattern)
          );
        } else {
          setInputVal(curInputVal);
        }
        setCursorPos(e, selectionStart);
      }

      switch (e.inputType) {
        case "":
        case "insertText":
          handleInsert();
          break;
        case "deleteContentBackward":
          setInputVal(replaceAt(curInputVal, selectionStart, maskChar));
          nextTick(() => {
            e.target.setSelectionRange(selectionStart, selectionStart);
          });
          break;
        case "deleteContentForward":
          break;
      }
    });
  },
};
