import { Module } from '@nestjs/common';
import { DivesService } from './dives.service';
import { DivesController } from './dives.controller';

@Module({
  controllers: [DivesController],
  providers: [DivesService]
})
export class DivesModule {}
