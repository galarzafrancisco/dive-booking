import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseBoolPipe, DefaultValuePipe } from '@nestjs/common';
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
  findAll(@Query('subscriptions') subscriptions: boolean) {
    const relations = [];
    console.log(Boolean(subscriptions))
    console.log(subscriptions)
    if (Boolean(subscriptions)) {
      relations.push('subscriptions')
    }
    return this.diversService.findAll({relations});
  }

  @Get(':id')
  findById(@Param('id') id: string, @Query('subscriptions') subscriptions: boolean) {
    const relations = [];
    if (Boolean(subscriptions)) {
      relations.push('subscriptions')
    }
    return this.diversService.findById(id, {relations});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiverDto: UpdateDiverDto) {
    return this.diversService.update(id, updateDiverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diversService.remove(id);
  }
}
