// import { Diver } from "src/divers/entities/diver.entity";
import { Diver } from "src/divers/entities/diver.entity";
import { Dive } from "src/dives/entities/dive.entity";
import { PackingList } from "src/packing-lists/entities/packing-list.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Subscription {
    @PrimaryColumn()
    subscription_id: string;

    @Column()
    dive_id: string;

    @ManyToOne(type => Dive)
    @JoinColumn({name: 'dive_id'})
    dive: Dive

    @Column()
    diver_id: string;

    @ManyToOne(type => Diver, diver => diver.subscriptions)
    @JoinColumn({name: 'diver_id'})
    diver: Diver

    @Column()
    subscription_ts: number;

    @Column()
    paid: boolean;

    @OneToMany(type => PackingList, packingList => packingList.subscription)
    packing_lists: PackingList[]
}
