import { Injectable } from '@nestjs/common';
import { CertificationsService } from './certifications/certifications.service';
import { DiversService } from './divers/divers.service';
import { DivesService } from './dives/dives.service';
import { GearRequiredListLinesService } from './gear-required-list-lines/gear-required-list-lines.service';
import { GearRequiredListsService } from './gear-required-lists/gear-required-lists.service';
import { ItemsService } from './items/items.service';
import { ShopsService } from './shops/shops.service';
import { SitesService } from './sites/sites.service';
import { SubscriptionsService } from './subscriptions/subscriptions.service';

@Injectable()
export class AppService {
  constructor(
      private certificationsService: CertificationsService,
      private diversService: DiversService,
      private itemsService: ItemsService,
      private gearRequiredListsService: GearRequiredListsService,
      private gearRequiredListLinesService: GearRequiredListLinesService,
      private shopsService: ShopsService,
      private sitesService: SitesService,
      private divesService: DivesService,
      private subscriptionsService: SubscriptionsService,
    ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async init() {
    // Create certification
    const certification = await this.certificationsService.create({
      name: 'Open water',
    });

    // Create diver
    const diver = await this.diversService.create({
      name_first: "Francisco",
      name_last: "Galarza",
      email: "franciscogalarza@gmail.com",
      address: "4/103 Addison Road, Manly, NSW, 2095",
      phone: "+61423327500",
    });

    // // Create Item
    const item = await this.itemsService.create({
      name: "BCD",
      photo_url: "https://cdn.webshopapp.com/shops/296139/files/322792318/scubapro-level.jpg",
      sizes: 'S,M,L',
      rent_price: 10
    });

    // Create Gear list
    const gearRequiredList = await this.gearRequiredListsService.create({
      name: "Double shore dive",
      description: "Used for recreationals double shore dives"
    });

    // Create Gear list line
    const gearRequiredListLine = await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: item.item_id
    });

    // Create a shop
    const shop = await this.shopsService.create({
      name: "Dive Centre Manly",
      address: "10 Belgrave St, Manly NSW 2095",
      phone: "+61 (02) 9977 4355",
      email: "info@divesydney.com.au",
      website: "https://www.divesydney.com.au/"
    });

    // Create a site
    const site = await this.sitesService.create({
      location: "-33.80049392652767, 151.2978031113966",
      max_depth: 10,
      type: "shore",
      name: "Shelly Beach",
      description: "Easy dive. Shelly Beach is like a big swimming pool full of marine life."
    });

    // Create a dive
    const dive = await this.divesService.create({
      site_id: site.site_id,
      date: 1234,
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });

    // Subscribe diver to dive
    const subscription = await this.subscriptionsService.create({
      dive_id: dive.dive_id,
      diver_id: diver.diver_id,
      subscription_ts: Date.now(),
      paid: false
    });

    return {};
  }
}
