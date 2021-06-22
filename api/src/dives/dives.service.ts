import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiveDto } from './dto/create-dive.dto';
import { UpdateDiveDto } from './dto/update-dive.dto';
import { Dive } from './entities/dive.entity';
import { Diver } from 'src/divers/entities/diver.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DivesService {
  constructor(@InjectRepository(Dive) private divesRepository: Repository<Dive>, @InjectRepository(Diver) private diversRepository: Repository<Diver>) {}

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
  // async findByIdAndEnrich(id: string) {
  //   console.log(`====> dive_id: ${id}`)
  //   const dive = await this.divesRepository.findOneOrFail(id, {relations: ['site', 'subscriptions']})
  //   const enrichedDive = {...dive}
  //   enrichedDive.subscriptions = await enrichedDive.subscriptions.map(async subscription => {
  //     subscription.diver = await this.diversRepository.findOne(subscription.diver_id)
  //     return subscription
  //   });
  //   return enrichedDive
  // }

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
