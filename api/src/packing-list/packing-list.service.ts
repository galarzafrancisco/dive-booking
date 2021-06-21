import { Injectable } from '@nestjs/common';
import { CreatePackingListDto } from './dto/create-packing-list.dto';
import { UpdatePackingListDto } from './dto/update-packing-list.dto';

@Injectable()
export class PackingListService {
  create(createPackingListDto: CreatePackingListDto) {
    return 'This action adds a new packingList';
  }

  findAll() {
    return `This action returns all packingList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packingList`;
  }

  update(id: number, updatePackingListDto: UpdatePackingListDto) {
    return `This action updates a #${id} packingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} packingList`;
  }
}
