"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpdateMedicoResponseDTO = exports.getMedicoResponseDTO = exports.getMedicoDTO = exports.getMedicoByIdResponseDTO = exports.getMedicoByEspecialidadeDTO = exports.getDeleteMedicoResponseDTO = exports.getCreateMedicoResponseDTO = void 0;
var _util = require("../lib/util");
var getMedicoDTO = function getMedicoDTO(medico) {
  return {
    ID: medico._id,
    nome: medico.nome,
    especialidade: medico.especialidade,
    CRM: medico.CRM,
    email: medico.email,
    foto: medico.foto
  };
};
exports.getMedicoDTO = getMedicoDTO;
var getMedicoResponseDTO = function getMedicoResponseDTO(medicos, count) {
  return {
    Dados: medicos.map(getMedicoDTO),
    Quantidade: count
  };
};
exports.getMedicoResponseDTO = getMedicoResponseDTO;
var getMedicoByIdResponseDTO = function getMedicoByIdResponseDTO(medico) {
  return {
    Dados: getMedicoDTO(medico)
  };
};
exports.getMedicoByIdResponseDTO = getMedicoByIdResponseDTO;
var getMedicoByEspecialidadeDTO = function getMedicoByEspecialidadeDTO(medicos) {
  return {
    Dados: medicos.map(getMedicoDTO)
  };
};
exports.getMedicoByEspecialidadeDTO = getMedicoByEspecialidadeDTO;
var getCreateMedicoResponseDTO = function getCreateMedicoResponseDTO(medico) {
  return {
    message: 'Médico criado com sucesso',
    nome: medico.nome,
    ID: medico._id
  };
};
exports.getCreateMedicoResponseDTO = getCreateMedicoResponseDTO;
var getDeleteMedicoResponseDTO = function getDeleteMedicoResponseDTO(medico) {
  return {
    message: 'Médico excluído com sucesso',
    nome: medico.nome,
    ID: medico._id
  };
};
exports.getDeleteMedicoResponseDTO = getDeleteMedicoResponseDTO;
var getUpdateMedicoResponseDTO = function getUpdateMedicoResponseDTO(medico) {
  return {
    message: 'Médico atualizado com sucesso',
    ID: medico._id,
    nome: medico.nome,
    especialidade: medico.especialidade,
    CRM: medico.CRM,
    email: medico.email,
    foto: medico.foto
  };
};
exports.getUpdateMedicoResponseDTO = getUpdateMedicoResponseDTO;