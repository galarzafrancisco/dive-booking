import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredListsController } from './gear-required-lists.controller';
import { GearRequiredListsService } from './gear-required-lists.service';

describe('GearRequiredListsController', () => {
  let controller: GearRequiredListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GearRequiredListsController],
      providers: [GearRequiredListsService],
    }).compile();

    controller = module.get<GearRequiredListsController>(GearRequiredListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
