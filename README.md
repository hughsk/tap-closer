# tap-closer
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/tap-closer.svg?style=flat)
![](http://img.shields.io/npm/dm/tap-closer.svg?style=flat)
![](http://img.shields.io/npm/l/tap-closer.svg?style=flat)

Simple JS "transform" tool that will call `window.close` or `process.exit` when
TAP output is complete.

Useful, for example, in combination with
[smokestack](http://github.com/hughsk/smokestack) and
[tape](http://github.com/substack/tape) and
[browserify](http://github.com/substack/node-browserify) for testing npm modules
in the browser:

``` bash
browserify test/*.js | tap-closer | smokestack | tap-spec
```

Note however that this isn't specific to browserify or smokestack or tape, you
can use this with any JavaScript tool that logs TAP output to your console.

[![NPM](https://nodei.co/npm/tap-closer.png)](https://nodei.co/npm/tap-closer/)

## CLI Usage

The CLI for `tap-closer` modifies your JavaScript file to capture `console.log`
calls and work out when a TAP test is finished, closing your browser or Node
process once this happens. It accepts input from stdin only, and outputs to
stdout only, so you would use it like so:

``` bash
cat bundle.js | tap-closer > bundle-closer.js
```

## Using Directly

All the CLI is doing is prepending the browserified contents of `instrument.js`
to whatever JavaScript is being piped in. You can do this yourself with the
module's `bundle.js` once installed, e.g.:

``` bash
cat node_modules/tap-closer/bundle.js bundle.js > bundle-closer.js
```

Though it's generally nicer/safer using the CLI :)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/tap-closer/blob/master/LICENSE.md) for details.
