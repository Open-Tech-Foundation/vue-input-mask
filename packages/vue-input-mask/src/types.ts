export type Token = {
  pattern: string;
  transform?: (c: string) => string;
};

export type Pattern = (string | Token)[];

export interface Binding {
  value: {
    mask: string;
    tokens?: Record<string, Token>;
    raw?: (r: string) => void;
  };
}
