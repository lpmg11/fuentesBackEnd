import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Fuente } from './interfaces/fuentes.interface';
import { CreateFuenteDTO } from './dto/fuentes.dto';

@Injectable()
export class FuentesService {
  constructor(@InjectModel('Fuente') private fuenteModel: Model<Fuente>) {}
  async getFuentes(): Promise<Fuente[]> {
    const fuentes = await this.fuenteModel.find();
    return fuentes;
  }

  async getFuente(fuenteID: string): Promise<Fuente> {
    const fuente = await this.fuenteModel.findById(fuenteID);
    return fuente;
  }
  async createFuente(createFuenteDTO: CreateFuenteDTO): Promise<Fuente> {
    const newFuente = new this.fuenteModel(createFuenteDTO);
    return await newFuente.save();
  }

  async deleteFuente(fuenteID: string): Promise<Fuente> {
    const fuente = await this.fuenteModel.findByIdAndRemove(fuenteID);
    return fuente;
  }

  async updateFuente(
    fuenteID: any,
    createFuenteDTO: CreateFuenteDTO,
  ): Promise<Fuente> {
    const updateFuente = await this.fuenteModel.findOneAndUpdate(
      fuenteID,
      createFuenteDTO,
      { new: true },
    );
    return updateFuente;
  }
}
