import { Test, TestingModule } from '@nestjs/testing';
import { PackingListsService } from './packing-lists.service';

describe('PackingListsService', () => {
  let service: PackingListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackingListsService],
    }).compile();

    service = module.get<PackingListsService>(PackingListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
