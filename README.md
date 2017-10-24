# node-linkify-lite

Linkify text with ~300B of uncompressed code

[![Build Status](https://travis-ci.org/andre487/node-linkify-lite.svg?branch=master)](https://travis-ci.org/andre487/node-linkify-lite)

```
npm install --save linkify-lite
```

```js
var linkify = require('linkify-lite')

var text = [
  'https://ru.wikipedia.org/wiki/Lorem_ipsum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  'http://ru.wikipedia.org/wiki/Lorem_ipsum',
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '//ru.wikipedia.org/wiki/Lorem_ipsum',
].join(' ')

linkify(text)

// > <a href="https://ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>
// > Lorem ipsum dolor sit amet, consectetur adipiscing elit,
// > <a href="http://ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>
// > sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// > <a href="//ru.wikipedia.org/wiki/Lorem_ipsum">//ru.wikipedia.org/wiki/Lorem_ipsum</a>
```
