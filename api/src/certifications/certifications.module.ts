import { Module } from '@nestjs/common';
import { CertificationsService } from './certifications.service';
import { CertificationsController } from './certifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Certification } from './entities/certification.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Certification])
  ],
  controllers: [CertificationsController],
  providers: [CertificationsService],
  exports: [CertificationsService]
})
export class CertificationsModule {}
