"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Medicos = void 0;
var _mongoose = require("mongoose");
var medicosSchema = new _mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Nome é obrigatório"]
  },
  especialidade: {
    type: String,
    required: [true, "Especialidade é obrigatória"]
  },
  CRM: {
    type: Number,
    unique: [true, "CRM já cadastrado"],
    min: [100000, "CRM inválido"],
    max: [999999, "CRM inválido"],
    required: [true, "CRM é obrigatório"]
  },
  email: {
    type: String,
    required: [true, "Email é obrigatório"]
  },
  foto: {
    type: String,
    required: [true, "Nome é obrigatório"]
  },
  isDeleted: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var Medicos = (0, _mongoose.model)('medicos', medicosSchema);
exports.Medicos = Medicos;