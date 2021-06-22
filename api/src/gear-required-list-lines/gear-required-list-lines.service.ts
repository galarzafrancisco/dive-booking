import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGearRequiredListLineDto } from './dto/create-gear-required-list-line.dto';
import { UpdateGearRequiredListLineDto } from './dto/update-gear-required-list-line.dto';
import { GearRequiredListLine } from './entities/gear-required-list-line.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GearRequiredListLinesService {
  constructor(@InjectRepository(GearRequiredListLine) private gearRequiredListLinesRepository: Repository<GearRequiredListLine>) {}

  create(createGearRequiredListLineDto: CreateGearRequiredListLineDto): Promise<GearRequiredListLine> {
    const newGearRequiredListLine = this.gearRequiredListLinesRepository.create({...createGearRequiredListLineDto});
    newGearRequiredListLine.line_id = uuidv4();
    return this.gearRequiredListLinesRepository.save(newGearRequiredListLine);
  }

  findAll(options: object = {}): Promise<GearRequiredListLine[]> {
    return this.gearRequiredListLinesRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<GearRequiredListLine> {
    return this.gearRequiredListLinesRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateGearRequiredListLineDto: UpdateGearRequiredListLineDto): Promise<GearRequiredListLine> {
    const gearRequiredListLine = await this.findById(id);
    const updatedGearRequiredListLine = {...gearRequiredListLine, ...updateGearRequiredListLineDto};
    return this.gearRequiredListLinesRepository.save(updatedGearRequiredListLine);
  }

  async remove(id: string): Promise<GearRequiredListLine> {
    const gearRequiredListLine = await this.findById(id);
    return this.gearRequiredListLinesRepository.remove(gearRequiredListLine);
  }
}
