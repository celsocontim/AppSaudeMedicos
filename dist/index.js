"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _logger = _interopRequireDefault(require("./lib/logger"));
var _error = _interopRequireDefault(require("./lib/error.handler"));
var _routes = _interopRequireDefault(require("./routes"));
var _config = _interopRequireDefault(require("config"));
var _db = require("./db");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = _config["default"].get('port');
var httpReqLogFormat = ':method :url :status :res[content-length] - :response-time ms';
var httpReqLogger = (0, _morgan["default"])(httpReqLogFormat, {
  stream: _logger["default"].stream
});
(0, _db.initializeDB)();
app.use(_express["default"].json({
  limit: '10mb'
}));
app.use(httpReqLogger);
app.use('/', _routes["default"]);
app.use(_error["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'Caminho não encontrado!'
  });
});
app.listen(port, function () {
  console.log('Ouvindo na porta', port);
});