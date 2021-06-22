import { Module } from '@nestjs/common';
import { DivesService } from './dives.service';
import { DivesController } from './dives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Dive } from './entities/dive.entity';
import { DiversService } from 'src/divers/divers.service';
import { Diver } from 'src/divers/entities/diver.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Dive]),
    TypeOrmModule.forFeature([Diver]),
  ],
  controllers: [DivesController],
  providers: [DivesService],
  exports: [DivesService]
})
export class DivesModule {}
