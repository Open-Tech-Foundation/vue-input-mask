import { Token } from "./types";

export const tokens: Record<string, Token> = {
  '#': { pattern: '[0-9]' },
  $: { pattern: '[A-Za-z]' },
  '*': { pattern: '[A-Za-z0-9]' },
  A: { pattern: '[A-Z]', transform: (c) => c.toLocaleUpperCase() },
  a: { pattern: '[a-z]', transform: (c) => c.toLocaleLowerCase() },
};

export const maskChar = '_';
