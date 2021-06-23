import { Item } from "src/items/entities/item.entity";
import { Subscription } from "src/subscriptions/entities/subscription.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class PackingList {
    @PrimaryColumn()
    packing_line_id: string;

    @Column()
    subscription_id: string;

    @ManyToOne(type => Subscription, subscription => subscription.packing_lists, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'subscription_id'})
    subscription: Subscription;

    @Column()
    item_id: string;

    @ManyToOne(type => Item, item => item.packing_lists)
    @JoinColumn({name: 'item_id'})
    item: Item;

    @Column()
    size: string;

    @Column()
    note: string;
}

