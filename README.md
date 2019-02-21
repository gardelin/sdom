# sdom

[![sdom on NPM](https://img.shields.io/npm/v/sdom-js.svg?style=flat-square)](https://www.npmjs.com/package/sdom-js) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Simple DOM element selection wrapper

## Install

```sh
$ npm i sdom-js --save
```

## Use
```javascrip
/**
 * {String} selector
 * {HtmlElement} scope default document
 *
 * @returns {Array|HtmlElement}
 */
sdom(selector, scope)
```
Note that if `sdom` matches only one element using provided selector, it will return `HtmlElement`, otherwise if it matches multiple elements will return `Array` of `HtmlElements`.
```javascript
import sdom from 'sdom'

sdom('body')                // select document.body
sdom('head')                // select document.head
sdom('#id')                 // select by ID
sdom('.class')              // select by class 
sdom('div h1')              // select by tag name
sdom('[data-attr]')         // select by attribute
sdom('meta', head)          // changing default scope (document)
sdom('#id', sdom('.el'))

```

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Gardelin

