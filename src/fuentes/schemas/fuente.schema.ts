import { Schema } from 'mongoose';

export const FuenteSchema = new Schema({
  name: String,
  description: String,
  repository: String,
  users: Array,
});
