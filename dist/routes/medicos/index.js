"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var router = (0, _express.Router)();
var medicos = [{
  nome: 'Fulano',
  especialidade: 'Cardiologia'
}, {
  nome: 'Ciclano',
  especialidade: 'Odontologia'
}];
router.get('/medicos-disponiveis', function (req, res, next) {
  res.json({
    Medicos: medicos
  });
});
router.post('/novo-medico', function (req, res, next) {
  medicos.push(req.body);
  res.json({
    message: 'Médico adicionado com sucesso!'
  });
});
router.get('/:id', function (req, res, next) {
  try {
    var id = req.params.id;
    if (id < 0 || id >= medicos.length) {
      var err = new Error('ID não encontrado');
      err.status = 404;
      throw err;
    }
    res.json({
      Medico: medicos[id]
    });
  } catch (err) {
    next(err);
  }
});
var _default = router;
exports["default"] = _default;