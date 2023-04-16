# Guide

## Default Tokens

```
#  - Number only, [0-9]
$  - Char only, [A-Z, a-z]
*  - Number or Char, [a-z, A-Z, 0-9]
A  - Uppercase char [A-Z], transform: (c) => c.toLocaleUpperCase()
a  - Lowercase char [a-z], transform: (c) => c.toLocaleLowerCase()
\\ - Escape token, eg: \\$
{} - Regular expression, eg: {[A-F]}
```

## Props

| Name   |   Type   | Required | Default   | Description                                                   |
| ------ | :------: | -------: | --------- | ------------------------------------------------------------- |
| mask   |  String  |      Yes | ''        | The input mask pattern                                        |
| tokens |  Object  |       No | {}        | The custom tokens                                             |
| raw    | Function |       No | undefined | The callback function, wich will receive the raw input value. |
