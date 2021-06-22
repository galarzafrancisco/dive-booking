import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private itemsRepository: Repository<Item>) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = this.itemsRepository.create({...createItemDto});
    newItem.item_id = uuidv4();
    return this.itemsRepository.save(newItem);
  }

  findAll(options: object = {}): Promise<Item[]> {
    return this.itemsRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<Item> {
    return this.itemsRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.findById(id);
    const updatedItem = {...item, ...updateItemDto};
    return this.itemsRepository.save(updatedItem);
  }

  async remove(id: string): Promise<Item> {
    const item = await this.findById(id);
    return this.itemsRepository.remove(item);
  }
}
