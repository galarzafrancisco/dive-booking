import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiversModule } from './divers/divers.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { DivesModule } from './dives/dives.module';
import { ShopModule } from './shop/shop.module';
import { ItemModule } from './item/item.module';
import { GearRequiredModule } from './gear-required/gear-required.module';
import { PackingListModule } from './packing-list/packing-list.module';
import { SiteModule } from './site/site.module';
import config from '../ormconfig';

@Module({
  imports: [DiversModule, TypeOrmModule.forRoot(config), SubscriptionsModule, DivesModule, ShopModule, ItemModule, GearRequiredModule, PackingListModule, SiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
