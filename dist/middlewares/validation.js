"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateObjectId = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _errors = require("../lib/errors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validateObjectId = function validateObjectId(req, res, next) {
  if (!_mongoose["default"].Types.ObjectId.isValid(req.params.id)) {
    throw new _errors.BadRequestError('ID invalido');
  }
  next();
};
exports.validateObjectId = validateObjectId;