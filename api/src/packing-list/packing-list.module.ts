import { Module } from '@nestjs/common';
import { PackingListService } from './packing-list.service';
import { PackingListController } from './packing-list.controller';

@Module({
  controllers: [PackingListController],
  providers: [PackingListService]
})
export class PackingListModule {}
