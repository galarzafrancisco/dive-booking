import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './entities/certification.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CertificationsService {
  constructor(@InjectRepository(Certification) private certificationsRepository: Repository<Certification>) {}

  create(createCertificationDto: CreateCertificationDto): Promise<Certification> {
    const newCertification = this.certificationsRepository.create({...createCertificationDto});
    newCertification.certification_id = uuidv4();
    return this.certificationsRepository.save(newCertification);
  }

  findAll(options: object = {}): Promise<Certification[]> {
    return this.certificationsRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<Certification> {
    return this.certificationsRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateCertificationDto: UpdateCertificationDto): Promise<Certification> {
    const certification = await this.findById(id);
    const updatedCertification = {...certification, ...updateCertificationDto};
    return this.certificationsRepository.save(updatedCertification);
  }

  async remove(id: string): Promise<Certification> {
    const certification = await this.findById(id);
    return this.certificationsRepository.remove(certification);
  }
}
