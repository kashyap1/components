"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = List;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function List() {
  return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "item 1"), /*#__PURE__*/_react["default"].createElement("li", null, "item 2"), /*#__PURE__*/_react["default"].createElement("li", null, "item 3"));
}