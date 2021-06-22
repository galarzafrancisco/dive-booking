import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DiversService } from './divers/divers.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('init')
  init() {
    return this.appService.init();
  }
}
