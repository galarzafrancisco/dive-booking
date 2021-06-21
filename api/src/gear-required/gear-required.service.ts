import { Injectable } from '@nestjs/common';
import { CreateGearRequiredDto } from './dto/create-gear-required.dto';
import { UpdateGearRequiredDto } from './dto/update-gear-required.dto';

@Injectable()
export class GearRequiredService {
  create(createGearRequiredDto: CreateGearRequiredDto) {
    return 'This action adds a new gearRequired';
  }

  findAll() {
    return `This action returns all gearRequired`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gearRequired`;
  }

  update(id: number, updateGearRequiredDto: UpdateGearRequiredDto) {
    return `This action updates a #${id} gearRequired`;
  }

  remove(id: number) {
    return `This action removes a #${id} gearRequired`;
  }
}
