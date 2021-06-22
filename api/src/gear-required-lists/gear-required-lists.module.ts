import { Module } from '@nestjs/common';
import { GearRequiredListsService } from './gear-required-lists.service';
import { GearRequiredListsController } from './gear-required-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { GearRequiredList } from './entities/gear-required-list.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([GearRequiredList])
  ],
  controllers: [GearRequiredListsController],
  providers: [GearRequiredListsService],
  exports: [GearRequiredListsService]
})
export class GearRequiredListsModule {}
