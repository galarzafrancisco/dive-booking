import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseBoolPipe, DefaultValuePipe } from '@nestjs/common';
import { PackingListsService } from './packing-lists.service';
import { CreatePackingListDto } from './dto/create-packing-list.dto';
import { UpdatePackingListDto } from './dto/update-packing-list.dto';

@Controller('packing-lists')
export class PackingListsController {
  constructor(private readonly packingListsService: PackingListsService) {}

  @Post()
  create(@Body() createPackingListDto: CreatePackingListDto) {
    return this.packingListsService.create(createPackingListDto);
  }

  @Get()
  findAll() {
    return this.packingListsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.packingListsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackingListDto: UpdatePackingListDto) {
    return this.packingListsService.update(id, updatePackingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packingListsService.remove(id);
  }
}
