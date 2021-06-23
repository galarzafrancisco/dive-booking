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

  create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = this.subscriptionsRepository.create({...createSubscriptionDto});
    newSubscription.subscription_id = uuidv4();
    return this.subscriptionsRepository.save(newSubscription);
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
    console.log(`==========+> Removing id ${id}`)
    const subscription = await this.findById(id);
    return this.subscriptionsRepository.remove(subscription);
    // return this.subscriptionsRepository.remove(subscription);
  }
}
