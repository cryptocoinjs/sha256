convert-sha256
==============

JavaScript component to compute the SHA256 of strings or bytes.

AMD/CommonJS compatible.


Install
-------

### Node.js/Browserify

    npm install --save cryptocoin-sha256

### Component

    component install cryptocoinjs/sha256


### Bower

    bower install cryptocoin-sha256


### Script

```html
<script src="/path/to/sha256.js"></script>
```


Usage
-----

### sha256(input)

input either an array of bytes or a string

```js
sha256("hello") //"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
```

you can verify:

    printf "hello" | shasum -a 256


Credits
-------

Loosely inspired by code from here: https://github.com/vbuterin/bitcoinjs-lib & CryptoJS


References on JavaScript UTF-8 forced encoding
----------------------------------------------

(these sources are also included as PDFs in the repo in case the links go dead)

- http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html
- http://hossa.in/2012/07/20/utf-8-in-javascript.html



License
-------

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>