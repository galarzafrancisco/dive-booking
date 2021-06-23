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
    const itemBCD = await this.itemsService.create({
      name: "BCD",
      photo_url: "https://cdn.webshopapp.com/shops/296139/files/322792318/scubapro-level.jpg",
      sizes: 'S,M,L',
      rent_price: 10
    });
    const itemWeight = await this.itemsService.create({
      name: "Weights",
      photo_url: "https://www.sportsmarinebunbury.com.au/wp-content/uploads/2019/11/DPBE-WEIGHT.jpg",
      sizes: '1,2,3,4,5,6,7,8,9,10',
      rent_price: 10
    });
    const itemRegs = await this.itemsService.create({
      name: "Regulators",
      photo_url: "https://cdn.shopify.com/s/files/1/0153/0833/products/MTX_C.jpg?v=1606202338",
      sizes: 'YOKE,DIN',
      rent_price: 10
    });
    const itemTanks = await this.itemsService.create({
      name: "Tanks",
      photo_url: "https://jettydive.com.au/wp-content/uploads/2019/03/Faber-12.2-ltr-Dive-Cylinder-1.jpg",
      sizes: '10.5L AIR, 12L Nitrox',
      rent_price: 10
    });
    const itemWetsuit = await this.itemsService.create({
      name: "Wetsuit",
      photo_url: "https://cdn.shopify.com/s/files/1/0249/5006/products/Neptune-Triton-7-5mm-Semi-Dry-Wetsuit_1024x1024.jpg?v=1492744564",
      sizes: '2,3,4',
      rent_price: 10
    });
    const itemFins = await this.itemsService.create({
      name: "Fins",
      photo_url: "https://images.squarespace-cdn.com/content/v1/5f0d2f766d40f05e88e422de/1610268732513-3ZAOPASU8BSLK657MX93/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/Vented-fins-Apeks-RK3-Military-Rubber-Diving-Fin.jpg",
      sizes: 'XS,S,M,L,XL',
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
      item_id: itemBCD.item_id,
      optional: false
    });
    await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: itemWeight.item_id,
      optional: false
    });
    await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: itemRegs.item_id,
      optional: false
    });
    await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: itemTanks.item_id,
      optional: false
    });
    await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: itemWetsuit.item_id,
      optional: false
    });
    await this.gearRequiredListLinesService.create({
      list_id: gearRequiredList.list_id,
      item_id: itemFins.item_id,
      optional: false
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
      date: new Date(2021, 5, 22, 9, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 5, 22, 10, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date().getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 5, 22, 11, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 5, 23, 9, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 5, 30, 9, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 6, 1, 9, 0, 0).getTime(),
      gear_required_list_id: gearRequiredList.list_id,
      cert_required_id: certification.certification_id,
      shop_id: shop.shop_id,
      meeting_address: shop.address
    });
    this.divesService.create({
      site_id: site.site_id,
      date: new Date(2021, 6, 2, 9, 0, 0).getTime(),
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
