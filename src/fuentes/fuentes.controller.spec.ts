import { Test, TestingModule } from '@nestjs/testing';
import { FuentesController } from './fuentes.controller';

describe('FuentesController', () => {
  let controller: FuentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuentesController],
    }).compile();

    controller = module.get<FuentesController>(FuentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
