'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndesionApp = require('./Components/IndesionApp');

var _IndesionApp2 = _interopRequireDefault(_IndesionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appcomp = document.getElementById('approot');
_reactDom2.default.render(_react2.default.createElement(_IndesionApp2.default, null), appcomp);
