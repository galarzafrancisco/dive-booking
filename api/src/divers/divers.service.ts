import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiverDto } from './dto/create-diver.dto';
import { UpdateDiverDto } from './dto/update-diver.dto';
import { Diver } from './entities/diver.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DiversService {
  constructor(@InjectRepository(Diver) private diversRepository: Repository<Diver>) {

  }

  create(createDiverDto: CreateDiverDto): Promise<Diver> {
    const newDiver = this.diversRepository.create({...createDiverDto});
    newDiver.diver_id = uuidv4();
    return this.diversRepository.save(newDiver);
  }

  findAll(): Promise<Diver[]> {
    return this.diversRepository.find();
  }

  findById(id: string): Promise<Diver> {
    return this.diversRepository.findOneOrFail(id);
  }

  async update(id: string, updateDiverDto: UpdateDiverDto): Promise<Diver> {
    const diver = await this.findById(id);
    const updatedDiver = {...diver, ...updateDiverDto};
    return this.diversRepository.save(updatedDiver);
  }

  async remove(id: string): Promise<Diver> {
    const diver = await this.findById(id);
    return this.diversRepository.remove(diver);
  }
}
