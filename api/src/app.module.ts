import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiversModule } from './divers/divers.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { DivesModule } from './dives/dives.module';
import { SitesModule } from './sites/sites.module';
import { ShopsModule } from './shops/shops.module';
import { ItemsModule } from './items/items.module';
import { GearRequiredListsModule } from './gear-required-lists/gear-required-lists.module';
import { GearRequiredListLinesModule } from './gear-required-list-lines/gear-required-list-lines.module';
import { PackingListsModule } from './packing-lists/packing-lists.module';
import { CertificationsModule } from './certifications/certifications.module';

@Module({
  imports: [DiversModule, SubscriptionsModule, DivesModule, SitesModule, ShopsModule, ItemsModule, GearRequiredListsModule, GearRequiredListLinesModule, PackingListsModule, CertificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
