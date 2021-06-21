// import { Diver } from "src/divers/entities/diver.entity";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Subscription {
    @PrimaryColumn()
    subscription_id: string;

    @Column()
    dive_id: string;

    @Column()
    diver_id: string;

    @Column()
    subscription_ts: number;

    @Column()
    paid: boolean;

    // @ManyToOne(type => Diver, diver => diver.subscriptions)
    // diver: Diver;
}
