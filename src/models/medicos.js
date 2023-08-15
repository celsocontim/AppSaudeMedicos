import { Schema, model } from 'mongoose';

const medicosSchema = new Schema({
  nome: String,
  especialidade: String,
});

export const Medicos = model('medicos', medicosSchema);