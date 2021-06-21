import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DivesService } from './dives.service';
import { CreateDiveDto } from './dto/create-dive.dto';
import { UpdateDiveDto } from './dto/update-dive.dto';

@Controller('dives')
export class DivesController {
  constructor(private readonly divesService: DivesService) {}

  @Post()
  create(@Body() createDiveDto: CreateDiveDto) {
    return this.divesService.create(createDiveDto);
  }

  @Get()
  findAll() {
    return this.divesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiveDto: UpdateDiveDto) {
    return this.divesService.update(+id, updateDiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divesService.remove(+id);
  }
}
