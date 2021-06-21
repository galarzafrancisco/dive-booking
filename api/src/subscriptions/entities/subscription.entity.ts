import { Column, PrimaryColumn } from "typeorm";

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
}
