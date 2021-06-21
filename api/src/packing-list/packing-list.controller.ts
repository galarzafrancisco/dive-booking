import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackingListService } from './packing-list.service';
import { CreatePackingListDto } from './dto/create-packing-list.dto';
import { UpdatePackingListDto } from './dto/update-packing-list.dto';

@Controller('packing-list')
export class PackingListController {
  constructor(private readonly packingListService: PackingListService) {}

  @Post()
  create(@Body() createPackingListDto: CreatePackingListDto) {
    return this.packingListService.create(createPackingListDto);
  }

  @Get()
  findAll() {
    return this.packingListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packingListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackingListDto: UpdatePackingListDto) {
    return this.packingListService.update(+id, updatePackingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packingListService.remove(+id);
  }
}
