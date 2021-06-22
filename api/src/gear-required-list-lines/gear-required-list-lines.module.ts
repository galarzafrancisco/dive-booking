import { Module } from '@nestjs/common';
import { GearRequiredListLinesService } from './gear-required-list-lines.service';
import { GearRequiredListLinesController } from './gear-required-list-lines.controller';

@Module({
  controllers: [GearRequiredListLinesController],
  providers: [GearRequiredListLinesService]
})
export class GearRequiredListLinesModule {}
