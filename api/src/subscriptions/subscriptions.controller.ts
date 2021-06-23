import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseBoolPipe, DefaultValuePipe } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionsService.create(createSubscriptionDto);
  }

  @Get()
  findAll() {
    return this.subscriptionsService.findAll({
      relations: ['diver', 'dive']
    });
  }

  // [
  //   'dive', 'dive.gear_required_list', 'dive.gear_required_list.lines', 'dive.gear_required_list.lines.item', 'packing_lists'
  // ]

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.subscriptionsService.findById(id, {
      relations: [
        'diver',
        'dive',
        'dive.gear_required_list',
        'dive.gear_required_list.lines',
        'dive.gear_required_list.lines.item',
        'packing_lists',
        'packing_lists.item'
      ]
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionsService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionsService.remove(id);
  }
}
