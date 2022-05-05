import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Res,
  Body,
  Param,
} from '@nestjs/common';
import { CreateFuenteDTO } from './dto/fuentes.dto';
import { FuentesService } from './fuentes.service';

@Controller('fuentes')
export class FuentesController {
  constructor(private fuentesService: FuentesService) {}
  @Post('/')
  async createFuente(@Res() res, @Body() createFuenteDTO: CreateFuenteDTO) {
    const fuente = await this.fuentesService.createFuente(createFuenteDTO);
    return res.status(200).json({
      message: 'Fuente agregada exitosamente',
      fuente: fuente,
    });
  }
  @Get('/')
  async getFuentes(@Res() res) {
    const fuentes = await this.fuentesService.getFuentes();
    return res.status(200).json(fuentes);
  }
  @Get('/:id')
  async getFuente(@Res() res, @Param('id') id) {
    const fuente = await this.fuentesService.getFuente(id);
    return res.status(200).json(fuente);
  }
  @Put('/:id')
  async updateFuente(
    @Res() res,
    @Body() createFuenteDTO: CreateFuenteDTO,
    @Param('id') id,
  ) {
    const fuente = await this.fuentesService.updateFuente(id, createFuenteDTO);
    return res.status(200).json({
      message: 'Fuente actualizada exitosamente',
      fuente: fuente,
    });
  }
  @Delete('/:id')
  async deleteFuente(@Res() res, @Param('id') id) {
    const fuente = await this.fuentesService.deleteFuente(id);
    return res.status(200).json({
      message: 'Fuente eliminada exitosamente',
      fuente: fuente,
    });
  }
}
