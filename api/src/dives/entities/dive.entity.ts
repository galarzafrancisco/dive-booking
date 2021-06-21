import { Column, PrimaryColumn, Entity } from "typeorm";

@Entity()
export class Dive {
    @PrimaryColumn()
    dive_id: string;

    @Column()
    site_id: string;

    @Column()
    date: number;

    @Column()
    gear_required_id: string;

    @Column()
    cert_required_id: string;

    @Column()
    shop_id: string;

    @Column()
    meeting_address: string;

}
