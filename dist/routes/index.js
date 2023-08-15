"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _medicos = _interopRequireDefault(require("./medicos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use('/medicos', _medicos["default"]);
var _default = router;
exports["default"] = _default;