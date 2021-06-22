import { Injectable } from '@nestjs/common';
import { CertificationsService } from './certifications/certifications.service';
import { DiversService } from './divers/divers.service';

@Injectable()
export class AppService {
  constructor(
      private certificationsService: CertificationsService,
      private diversService: DiversService
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
    // const item = await this.

    // Create Gear list

    // Create Gear list line

    return {};
  }
}
