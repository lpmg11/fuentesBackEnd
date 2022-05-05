import { Document } from 'mongoose';

export interface Fuente extends Document {
  name: string;
  description: string;
  repository: string;
  users: string[];
}
