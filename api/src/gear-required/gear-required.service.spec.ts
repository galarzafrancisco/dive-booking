import { Test, TestingModule } from '@nestjs/testing';
import { GearRequiredService } from './gear-required.service';

describe('GearRequiredService', () => {
  let service: GearRequiredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRequiredService],
    }).compile();

    service = module.get<GearRequiredService>(GearRequiredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
