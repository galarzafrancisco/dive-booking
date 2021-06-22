import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './entities/subscription.entity';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class SubscriptionsService {
  constructor(@InjectRepository(Subscription) private subscriptionsRepository: Repository<Subscription>) {}

  create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = this.subscriptionsRepository.create({...createSubscriptionDto});
    newSubscription.subscription_id = uuidv4();
    return this.subscriptionsRepository.save(newSubscription);
  }

  findAll(): Promise<Subscription[]> {
    return this.subscriptionsRepository.find();
  }

  findById(id: string): Promise<Subscription> {
    return this.subscriptionsRepository.findOneOrFail(id);
  }

  async update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<Subscription> {
    const Subscription = await this.findById(id);
    const updatedSubscription = {...Subscription, ...updateSubscriptionDto};
    return this.subscriptionsRepository.save(updatedSubscription);
  }

  async remove(id: string): Promise<Subscription> {
    const Subscription = await this.findById(id);
    return this.subscriptionsRepository.remove(Subscription);
  }
}
