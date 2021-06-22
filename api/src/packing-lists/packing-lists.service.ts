import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePackingListDto } from './dto/create-packing-list.dto';
import { UpdatePackingListDto } from './dto/update-packing-list.dto';
import { PackingList } from './entities/packing-list.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PackingListsService {
  constructor(@InjectRepository(PackingList) private PackingListsRepository: Repository<PackingList>) {}

  create(createPackingListDto: CreatePackingListDto): Promise<PackingList> {
    const newPackingList = this.PackingListsRepository.create({...createPackingListDto});
    newPackingList.packing_line_id = uuidv4();
    return this.PackingListsRepository.save(newPackingList);
  }

  findAll(options: object = {}): Promise<PackingList[]> {
    return this.PackingListsRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<PackingList> {
    return this.PackingListsRepository.findOneOrFail(id, options);
  }

  async update(id: string, updatePackingListDto: UpdatePackingListDto): Promise<PackingList> {
    const PackingList = await this.findById(id);
    const updatedPackingList = {...PackingList, ...updatePackingListDto};
    return this.PackingListsRepository.save(updatedPackingList);
  }

  async remove(id: string): Promise<PackingList> {
    const PackingList = await this.findById(id);
    return this.PackingListsRepository.remove(PackingList);
  }
}
