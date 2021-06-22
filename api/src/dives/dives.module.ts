import { Module } from '@nestjs/common';
import { DivesService } from './dives.service';
import { DivesController } from './dives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dive } from './entities/dive.entity';
import config from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Dive])
  ],
  controllers: [DivesController],
  providers: [DivesService]
})
export class DivesModule {}
