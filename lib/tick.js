
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Tick = _react2['default'].createClass({
  getInitialState: function() {
    return _objectAssign2['default']({
      format: "remain: {dd} days {hh} hours {mm} minutes {ss} seconds",
      text: ''
    }, this.props);
  },

  componentDidMount: function() {
    if (this.state.endTime) {
      this.tickStart();
    } else {
      this.setState({
        text: this.format(new Date(), 'yyyy/MM/dd hh:mm:ss')
      });
    }
  },

  format: function(time, format) {
    var o = {
      "M+": time.getMonth() + 1, // month
      "d+": time.getDate(),    // day
      "h+": time.getHours(),   // hour
      "m+": time.getMinutes(), // minute
      "s+": time.getSeconds(), // second
      "q+": Math.floor((time.getMonth() + 3) / 3), // quarter
      "S": time.getMilliseconds() // millisecond
    };

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }

    return format;
  },

  tick: function(e) {
    var state = this.state;
    var matdd = /(\{dd\}){1}/;
    var mathh = /(\{hh\}){1}/;
    var matmm = /(\{mm\}){1}/;
    var matss = /(\{ss\}){1}/;

    if (!(matdd.test(state.format) || mathh.test(state.format) || matmm.test(state.format) || matss.test(state.format))) {
      this.tickEnd();
      return;
    }

    var time = this.calculate(new Date(), state.endTime);

    if (!time) {
      this.state.onTimeUp();
      this.tickEnd();
      return;
    }

    var parsedText = state.format.replace(matdd, time.d).replace(mathh, time.h).replace(matmm, time.m).replace(matss, time.s);

    this.setState({text: parsedText});
  },

  calculate: function calculation(start, end) {
    var theTime = Date.parse(end) - Date.parse(start);
    return theTime >= 0 ? {
      d: Math.floor(theTime / (1000 * 60 * 60 * 24)),
      h: Math.floor(theTime / (1000 * 60 * 60) % 24),
      m: Math.floor(theTime / (1000 * 60) % 60),
      s: Math.floor(theTime / 1000 % 60)
    } : false;
  },

  tickStart: function() {
    this.timer = setInterval(this.tick, 1000);
  },

  tickEnd: function() {
    clearInterval(this.timer);
  },

  render: function() {
    return (
        <span>{this.state.text}</span>
    );
  }
});

module.exports = Tick;