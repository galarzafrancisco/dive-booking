import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './entities/subscription.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SubscriptionsService {
  constructor(@InjectRepository(Subscription) private subscriptionsRepository: Repository<Subscription>) {}

  async create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = this.subscriptionsRepository.create({...createSubscriptionDto});
    newSubscription.subscription_id = uuidv4();
    await this.subscriptionsRepository.save(newSubscription);

    // Add packing list
    const expandedSubscription = await this.subscriptionsRepository.findOne(newSubscription.subscription_id, {relations: [
      'dive', 'dive.gear_required_list', 'dive.gear_required_list.lines', 'dive.gear_required_list.lines.item', 'packing_lists'
    ]})

    console.log(expandedSubscription.dive.gear_required_list.lines);
    
    newSubscription.packing_lists = [];

    return expandedSubscription;
  }

  findAll(options: object = {}): Promise<Subscription[]> {
    return this.subscriptionsRepository.find(options);
  }

  findById(id: string, options: object = {}): Promise<Subscription> {
    return this.subscriptionsRepository.findOneOrFail(id, options);
  }

  async update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<Subscription> {
    const subscription = await this.findById(id);
    const updatedSubscription = {...subscription, ...updateSubscriptionDto};
    return this.subscriptionsRepository.save(updatedSubscription);
  }

  async remove(id: string): Promise<Subscription> {
    const subscription = await this.findById(id);
    return this.subscriptionsRepository.remove(subscription);
  }
}
