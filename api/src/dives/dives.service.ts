import { Injectable } from '@nestjs/common';
import { CreateDiveDto } from './dto/create-dive.dto';
import { UpdateDiveDto } from './dto/update-dive.dto';

@Injectable()
export class DivesService {
  create(createDiveDto: CreateDiveDto) {
    return 'This action adds a new dive';
  }

  findAll() {
    return `This action returns all dives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dive`;
  }

  update(id: number, updateDiveDto: UpdateDiveDto) {
    return `This action updates a #${id} dive`;
  }

  remove(id: number) {
    return `This action removes a #${id} dive`;
  }
}
