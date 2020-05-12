# Frenchify

A package to apply french punctuation rules (e.g. thin spaces before question marks)

## Usage

```ts
import { frenchify } from 'frenchify';

const annoyingTourist = `Excusez-moi : pourriez-vous m' indiquer où se trouve la "Tour Eiffel" ?`;

frenchify(annoyingTourist);
```

It replaces the spaces before `:`, `!`, `?`, and `;` by a thin space (`\u202f`).

It does also some other changes, like converting `""` to `« »`, or converting `...` to `…`.

Here are some rules that I follow in this package: https://fr.wikipedia.org/wiki/Ponctuation#En_français

I don't use them all because I don't need them in my current projects, but you are welcome to update this package to implement all these rules.

Vive le fromage !
