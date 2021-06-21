import { Injectable } from '@nestjs/common';
import { CreateDiverDto } from './dto/create-diver.dto';
import { UpdateDiverDto } from './dto/update-diver.dto';

@Injectable()
export class DiversService {
  create(createDiverDto: CreateDiverDto) {
    return 'This action adds a new diver';
  }

  findAll() {
    return `This action returns all divers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diver`;
  }

  update(id: number, updateDiverDto: UpdateDiverDto) {
    return `This action updates a #${id} diver`;
  }

  remove(id: number) {
    return `This action removes a #${id} diver`;
  }
}
