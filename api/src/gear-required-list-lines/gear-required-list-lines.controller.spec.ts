import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredListLinesController } from './gear-required-list-lines.controller';
import { GearRequiredListLinesService } from './gear-required-list-lines.service';

describe('GearRequiredListLinesController', () => {
  let controller: GearRequiredListLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GearRequiredListLinesController],
      providers: [GearRequiredListLinesService],
    }).compile();

    controller = module.get<GearRequiredListLinesController>(GearRequiredListLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
