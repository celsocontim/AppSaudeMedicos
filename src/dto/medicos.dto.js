import { getPaginationInfo } from '../lib/util';

export const getMedicoDTO = (medico) => ({
  ID: medico._id,
  nome: medico.nome,
  especialidade: medico.especialidade,
  CRM: medico.CRM,
  email: medico.email,
  foto: medico.foto,
});

export const getMedicoResponseDTO = (medicos, count) => ({
  Dados: medicos.map(getMedicoDTO),
  Quantidade: count,
});

export const getMedicoByIdResponseDTO = (medico) => ({
  Dados: getMedicoDTO(medico),
});

export const getMedicoByEspecialidadeDTO = (medicos) => ({
  Dados: medicos.map(getMedicoDTO),
});

export const getCreateMedicoResponseDTO = (medico) => ({
  message: 'Médico criado com sucesso',
  nome: medico.nome,
  ID: medico._id,
});

export const getDeleteMedicoResponseDTO = (medico) => ({
  message: 'Médico excluído com sucesso',
  nome: medico.nome,
  ID: medico._id,
});

export const getUpdateMedicoResponseDTO = (medico) => ({
  message: 'Médico atualizado com sucesso',
  ID: medico._id,
  nome: medico.nome,
  especialidade: medico.especialidade,
  CRM: medico.CRM,
  email: medico.email,
  foto: medico.foto,
});