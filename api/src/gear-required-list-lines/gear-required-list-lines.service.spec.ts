import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredListLinesService } from './gear-required-list-lines.service';

describe('GearRequiredListLinesService', () => {
  let service: GearRequiredListLinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRequiredListLinesService],
    }).compile();

    service = module.get<GearRequiredListLinesService>(GearRequiredListLinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
