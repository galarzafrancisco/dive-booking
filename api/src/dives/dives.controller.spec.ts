import { Test, TestingModule } from '@nestjs/testing';
import { DivesController } from './dives.controller';
import { DivesService } from './dives.service';

describe('DivesController', () => {
  let controller: DivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DivesController],
      providers: [DivesService],
    }).compile();

    controller = module.get<DivesController>(DivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
