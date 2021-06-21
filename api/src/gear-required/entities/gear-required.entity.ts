import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class GearRequired {
    @PrimaryColumn()
    gear_required_id: string;

    @Column()
    item_id: string;

    @Column()
    name: string;

    @Column()
    description: string;
}
