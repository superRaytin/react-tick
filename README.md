# react-tick
Countdown timer for React

# Installation

```
npm install react-tick
```

# Quick Start

```html
<div id="__react_content"></div>
```

```js
var React = require('react');
var Tick = require('react-tick');

var Container = React.createClass({
    render: function () {
        var onTimeUp = function () {
            console.log('Time is up!');
        };

        return (
            <div class="container">
                <div>hello world!</div>
                <Tick
                    format="remain: {dd} days {hh} hours {mm} minutes {ss} seconds"
                    endTime="2015/12/31 23:59:59"
                    onTimeUp={onTimeUp} />
            </div>
        );
    }
});

React.render(<Container />, document.getElementById('__react_content'));
```

# Manifest

### format

Used to format the display string with some variables. HTML tag is supported.

- **dd** remain days.
- **hh** remain hours.
- **mm** remain minutes.
- **ss** remain seconds.

### endTime

End time. The time format should be `yyyy/MM/dd hh:mm:ss` like `2012/12/31 23:59:59`.

### onTimeUp

A function to be executed when time is up.

# License

MIT, see the [LICENSE](/LICENSE) file for detail.