import { Module } from '@nestjs/common';
import { DiversService } from './divers.service';
import { DiversController } from './divers.controller';

@Module({
  controllers: [DiversController],
  providers: [DiversService]
})
export class DiversModule {}
