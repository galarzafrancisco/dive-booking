import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ShopsService {
  constructor(@InjectRepository(Shop) private shopsRepository: Repository<Shop>) {}

  create(createShopDto: CreateShopDto): Promise<Shop> {
    const newShop = this.shopsRepository.create({...createShopDto});
    newShop.shop_id = uuidv4();
    return this.shopsRepository.save(newShop);
  }

  findAll(): Promise<Shop[]> {
    return this.shopsRepository.find();
  }

  findById(id: string): Promise<Shop> {
    return this.shopsRepository.findOneOrFail(id);
  }

  async update(id: string, updateShopDto: UpdateShopDto): Promise<Shop> {
    const shop = await this.findById(id);
    const updatedShop = {...shop, ...updateShopDto};
    return this.shopsRepository.save(updatedShop);
  }

  async remove(id: string): Promise<Shop> {
    const shop = await this.findById(id);
    return this.shopsRepository.remove(shop);
  }
}
