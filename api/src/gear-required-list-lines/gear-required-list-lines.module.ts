import { Module } from '@nestjs/common';
import { GearRequiredListLinesService } from './gear-required-list-lines.service';
import { GearRequiredListLinesController } from './gear-required-list-lines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { GearRequiredListLine } from './entities/gear-required-list-line.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([GearRequiredListLine])
  ],
  controllers: [GearRequiredListLinesController],
  providers: [GearRequiredListLinesService],
  exports: [GearRequiredListLinesService]
})
export class GearRequiredListLinesModule {}
