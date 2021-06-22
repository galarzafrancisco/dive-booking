import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredListsService } from './gear-required-lists.service';

describe('GearRequiredListsService', () => {
  let service: GearRequiredListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRequiredListsService],
    }).compile();

    service = module.get<GearRequiredListsService>(GearRequiredListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
