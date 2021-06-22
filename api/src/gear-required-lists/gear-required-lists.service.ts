import { Injectable } from '@nestjs/common';
import { CreateGearRequiredListDto } from './dto/create-gear-required-list.dto';
import { UpdateGearRequiredListDto } from './dto/update-gear-required-list.dto';

@Injectable()
export class GearRequiredListsService {
  create(createGearRequiredListDto: CreateGearRequiredListDto) {
    return 'This action adds a new gearRequiredList';
  }

  findAll() {
    return `This action returns all gearRequiredLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gearRequiredList`;
  }

  update(id: number, updateGearRequiredListDto: UpdateGearRequiredListDto) {
    return `This action updates a #${id} gearRequiredList`;
  }

  remove(id: number) {
    return `This action removes a #${id} gearRequiredList`;
  }
}
