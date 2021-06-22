import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseBoolPipe, DefaultValuePipe } from '@nestjs/common';
import { GearRequiredListsService } from './gear-required-lists.service';
import { CreateGearRequiredListDto } from './dto/create-gear-required-list.dto';
import { UpdateGearRequiredListDto } from './dto/update-gear-required-list.dto';

@Controller('gear-required-lists')
export class GearRequiredListsController {
  constructor(private readonly gearRequiredListsService: GearRequiredListsService) {}

  @Post()
  create(@Body() createGearRequiredListDto: CreateGearRequiredListDto) {
    return this.gearRequiredListsService.create(createGearRequiredListDto);
  }

  @Get()
  findAll() {
    return this.gearRequiredListsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.gearRequiredListsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGearRequiredListDto: UpdateGearRequiredListDto) {
    return this.gearRequiredListsService.update(id, updateGearRequiredListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gearRequiredListsService.remove(id);
  }
}
