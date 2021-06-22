import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { Shop } from './entities/shop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Shop])
  ],
  controllers: [ShopsController],
  providers: [ShopsService],
  exports: [ShopsService]
})
export class ShopsModule {}
