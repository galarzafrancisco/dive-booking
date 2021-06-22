import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GearRequiredListLinesService } from './gear-required-list-lines.service';
import { CreateGearRequiredListLineDto } from './dto/create-gear-required-list-line.dto';
import { UpdateGearRequiredListLineDto } from './dto/update-gear-required-list-line.dto';

@Controller('gear-required-list-lines')
export class GearRequiredListLinesController {
  constructor(private readonly gearRequiredListLinesService: GearRequiredListLinesService) {}

  @Post()
  create(@Body() createGearRequiredListLineDto: CreateGearRequiredListLineDto) {
    return this.gearRequiredListLinesService.create(createGearRequiredListLineDto);
  }

  @Get()
  findAll() {
    return this.gearRequiredListLinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gearRequiredListLinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGearRequiredListLineDto: UpdateGearRequiredListLineDto) {
    return this.gearRequiredListLinesService.update(+id, updateGearRequiredListLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gearRequiredListLinesService.remove(+id);
  }
}
