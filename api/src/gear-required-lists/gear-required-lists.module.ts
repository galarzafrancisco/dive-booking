import { Module } from '@nestjs/common';
import { GearRequiredListsService } from './gear-required-lists.service';
import { GearRequiredListsController } from './gear-required-lists.controller';

@Module({
  controllers: [GearRequiredListsController],
  providers: [GearRequiredListsService]
})
export class GearRequiredListsModule {}
