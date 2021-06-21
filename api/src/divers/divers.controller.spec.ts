import { Test, TestingModule } from '@nestjs/testing';
import { DiversController } from './divers.controller';
import { DiversService } from './divers.service';

describe('DiversController', () => {
  let controller: DiversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiversController],
      providers: [DiversService],
    }).compile();

    controller = module.get<DiversController>(DiversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
