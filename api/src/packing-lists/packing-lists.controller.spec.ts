import { Test, TestingModule } from '@nestjs/testing';
import { PackingListsController } from './packing-lists.controller';
import { PackingListsService } from './packing-lists.service';

describe('PackingListsController', () => {
  let controller: PackingListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackingListsController],
      providers: [PackingListsService],
    }).compile();

    controller = module.get<PackingListsController>(PackingListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
