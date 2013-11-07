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

### sha256(input, options)

input either an array of bytes or a string

```js
sha256("hello") //"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
```

you can verify:

    printf "hello" | shasum -a 256


### sha256.x2(input, options)

computes the `sha256` twice.

```js
sha256.x2("hello")//"d7914fe546b684688bb95f4f888a92dfc680603a75f23eb823658031fff766d9"
```


Credits
-------

Most of the code from CryptoJS https://code.google.com/p/crypto-js/



License
-------

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>