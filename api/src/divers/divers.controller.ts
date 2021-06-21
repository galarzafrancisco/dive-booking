import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiversService } from './divers.service';
import { CreateDiverDto } from './dto/create-diver.dto';
import { UpdateDiverDto } from './dto/update-diver.dto';

@Controller('divers')
export class DiversController {
  constructor(private readonly diversService: DiversService) {}

  @Post()
  create(@Body() createDiverDto: CreateDiverDto) {
    return this.diversService.create(createDiverDto);
  }

  @Get()
  findAll() {
    return this.diversService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diversService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiverDto: UpdateDiverDto) {
    return this.diversService.update(+id, updateDiverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diversService.remove(+id);
  }
}
