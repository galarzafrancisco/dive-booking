import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import config from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Site])
  ],
  controllers: [SitesController],
  providers: [SitesService]
})
export class SitesModule {}
