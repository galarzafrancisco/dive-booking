import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredController } from './gear-required.controller';
import { GearRequiredService } from './gear-required.service';

describe('GearRequiredController', () => {
  let controller: GearRequiredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GearRequiredController],
      providers: [GearRequiredService],
    }).compile();

    controller = module.get<GearRequiredController>(GearRequiredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
