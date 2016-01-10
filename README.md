# react-tick
> Countdown timer for React

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[![react-tick](https://nodei.co/npm/react-tick.png)](https://npmjs.org/package/react-tick)

[npm-url]: https://npmjs.org/package/react-tick
[downloads-image]: http://img.shields.io/npm/dm/react-tick.svg
[npm-image]: http://img.shields.io/npm/v/react-tick.svg

# Installation

```
npm install react-tick
```

# Usage

```js
var React = require('react');
var Tick = require('react-tick');
var ReactDOM = require('react-dom');
ReactDOM.render(
    <Tick
        format="remain: {dd} days {hh} hours {mm} minutes {ss} seconds"
        endTime="2015/12/31 23:59:59"
        onTimeUp={onTimeUp} />,
    mountNode
);
```

# Manifest

### format

A string used to format the display string with some variables. HTML tags is supported.

- **dd** remain days.
- **hh** remain hours.
- **mm** remain minutes.
- **ss** remain seconds.

### endTime

A string to indicate end time, the time format should be `yyyy/MM/dd hh:mm:ss` like `2012/12/31 23:59:59`.

### onTimeUp

A function will be executed when time is up.

# License

MIT, see the [LICENSE](/LICENSE) file for detail.