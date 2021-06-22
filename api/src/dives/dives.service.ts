import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiveDto } from './dto/create-dive.dto';
import { UpdateDiveDto } from './dto/update-dive.dto';
import { Dive } from './entities/dive.entity';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class DivesService {
  constructor(@InjectRepository(Dive) private divesRepository: Repository<Dive>) {}

  create(createDiveDto: CreateDiveDto): Promise<Dive> {
    const newDive = this.divesRepository.create({...createDiveDto});
    newDive.dive_id = uuidv4();
    return this.divesRepository.save(newDive);
  }

  findAll(): Promise<Dive[]> {
    return this.divesRepository.find({
      relations: ['site']
    });
  }

  findById(id: string): Promise<Dive> {
    return this.divesRepository.findOneOrFail(id);
  }

  async update(id: string, updateDiveDto: UpdateDiveDto): Promise<Dive> {
    const Dive = await this.findById(id);
    const updatedDive = {...Dive, ...updateDiveDto};
    return this.divesRepository.save(updatedDive);
  }

  async remove(id: string): Promise<Dive> {
    const Dive = await this.findById(id);
    return this.divesRepository.remove(Dive);
  }
}
