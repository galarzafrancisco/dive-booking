import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GearRequiredService } from './gear-required.service';
import { CreateGearRequiredDto } from './dto/create-gear-required.dto';
import { UpdateGearRequiredDto } from './dto/update-gear-required.dto';

@Controller('gear-required')
export class GearRequiredController {
  constructor(private readonly gearRequiredService: GearRequiredService) {}

  @Post()
  create(@Body() createGearRequiredDto: CreateGearRequiredDto) {
    return this.gearRequiredService.create(createGearRequiredDto);
  }

  @Get()
  findAll() {
    return this.gearRequiredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gearRequiredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGearRequiredDto: UpdateGearRequiredDto) {
    return this.gearRequiredService.update(+id, updateGearRequiredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gearRequiredService.remove(+id);
  }
}
