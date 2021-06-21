import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PackingList {
    @PrimaryColumn()
    packing_line_id: string;

    @Column()
    subscription_id: string;

    @Column()
    item_id: string;

    @Column()
    size: string;

    @Column()
    note: string;
}
