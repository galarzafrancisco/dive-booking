import { Subscription } from "src/subscriptions/entities/subscription.entity";
import { Column, Entity, OneToMany, PrimaryColumn, } from "typeorm";

@Entity()
export class Diver {
    @PrimaryColumn()
    diver_id: string;

    @Column()
    name_first: string;

    @Column()
    name_last: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @OneToMany(type => Subscription, subscription => subscription.diver)
    subscriptions: Subscription[]
}
