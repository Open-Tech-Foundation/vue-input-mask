export type Token = {
  pattern: string;
  transform?: (string) => string;
};

export type Pattern = (string | Token)[];
