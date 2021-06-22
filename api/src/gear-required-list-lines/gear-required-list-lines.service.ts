import { Injectable } from '@nestjs/common';
import { CreateGearRequiredListLineDto } from './dto/create-gear-required-list-line.dto';
import { UpdateGearRequiredListLineDto } from './dto/update-gear-required-list-line.dto';

@Injectable()
export class GearRequiredListLinesService {
  create(createGearRequiredListLineDto: CreateGearRequiredListLineDto) {
    return 'This action adds a new gearRequiredListLine';
  }

  findAll() {
    return `This action returns all gearRequiredListLines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gearRequiredListLine`;
  }

  update(id: number, updateGearRequiredListLineDto: UpdateGearRequiredListLineDto) {
    return `This action updates a #${id} gearRequiredListLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} gearRequiredListLine`;
  }
}
