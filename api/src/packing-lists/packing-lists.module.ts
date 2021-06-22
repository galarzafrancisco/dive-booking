import { Module } from '@nestjs/common';
import { PackingListsService } from './packing-lists.service';
import { PackingListsController } from './packing-lists.controller';

@Module({
  controllers: [PackingListsController],
  providers: [PackingListsService]
})
export class PackingListsModule {}
