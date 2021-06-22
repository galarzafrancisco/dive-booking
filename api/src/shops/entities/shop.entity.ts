import { Dive } from "src/dives/entities/dive.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Shop {
    @PrimaryColumn()
    shop_id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    website: string;

    @OneToMany(type => Dive, dive => dive.shop)
    dives: Dive[]
}
