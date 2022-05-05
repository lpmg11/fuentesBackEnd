import { Module } from '@nestjs/common';
import { FuentesController } from './fuentes.controller';
import { FuentesService } from './fuentes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FuenteSchema } from './schemas/fuente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Fuente', schema: FuenteSchema }]),
  ],
  controllers: [FuentesController],
  providers: [FuentesService],
})
export class FuentesModule {}
