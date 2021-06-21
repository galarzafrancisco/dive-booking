import { Module } from '@nestjs/common';
import { GearRequiredService } from './gear-required.service';
import { GearRequiredController } from './gear-required.controller';

@Module({
  controllers: [GearRequiredController],
  providers: [GearRequiredService]
})
export class GearRequiredModule {}
