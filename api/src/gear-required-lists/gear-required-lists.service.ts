import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGearRequiredListDto } from './dto/create-gear-required-list.dto';
import { UpdateGearRequiredListDto } from './dto/update-gear-required-list.dto';
import { GearRequiredList } from './entities/gear-required-list.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GearRequiredListsService {
  constructor(@InjectRepository(GearRequiredList) private gearRequiredListsRepository: Repository<GearRequiredList>) {}

  create(createGearRequiredListDto: CreateGearRequiredListDto): Promise<GearRequiredList> {
    const newGearRequiredList = this.gearRequiredListsRepository.create({...createGearRequiredListDto});
    newGearRequiredList.list_id = uuidv4();
    return this.gearRequiredListsRepository.save(newGearRequiredList);
  }

  findAll(options: object = {}): Promise<GearRequiredList[]> {
    return this.gearRequiredListsRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<GearRequiredList> {
    return this.gearRequiredListsRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateGearRequiredListDto: UpdateGearRequiredListDto): Promise<GearRequiredList> {
    const gearRequiredList = await this.findById(id);
    const updatedGearRequiredList = {...gearRequiredList, ...updateGearRequiredListDto};
    return this.gearRequiredListsRepository.save(updatedGearRequiredList);
  }

  async remove(id: string): Promise<GearRequiredList> {
    const gearRequiredList = await this.findById(id);
    return this.gearRequiredListsRepository.remove(gearRequiredList);
  }
}
