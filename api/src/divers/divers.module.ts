import { Module } from '@nestjs/common';
import { DiversService } from './divers.service';
import { DiversController } from './divers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Diver } from './entities/diver.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Diver])
  ],
  controllers: [DiversController],
  providers: [DiversService],
  exports: [DiversService]
})
export class DiversModule {}
