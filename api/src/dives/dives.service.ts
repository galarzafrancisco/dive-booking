import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiveDto } from './dto/create-dive.dto';
import { UpdateDiveDto } from './dto/update-dive.dto';
import { Dive } from './entities/dive.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DivesService {
  constructor(@InjectRepository(Dive) private divesRepository: Repository<Dive>) {}

  create(createDiveDto: CreateDiveDto): Promise<Dive> {
    const newDive = this.divesRepository.create({...createDiveDto});
    newDive.dive_id = uuidv4();
    return this.divesRepository.save(newDive);
  }

  findAll(options: object = {}): Promise<Dive[]> {
    return this.divesRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<Dive> {
    return this.divesRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateDiveDto: UpdateDiveDto): Promise<Dive> {
    const dive = await this.findById(id);
    const updatedDive = {...dive, ...updateDiveDto};
    return this.divesRepository.save(updatedDive);
  }

  async remove(id: string): Promise<Dive> {
    const dive = await this.findById(id);
    return this.divesRepository.remove(dive);
  }
}
