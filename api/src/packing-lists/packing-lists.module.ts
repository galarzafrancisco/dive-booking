import { Module } from '@nestjs/common';
import { PackingListsService } from './packing-lists.service';
import { PackingListsController } from './packing-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { PackingList } from './entities/packing-list.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([PackingList])
  ],
  controllers: [PackingListsController],
  providers: [PackingListsService],
  exports: [PackingListsService]
})
export class PackingListsModule {}
