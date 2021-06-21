import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryColumn()
    imte_id: string;

    @Column()
    name: string;

    @Column()
    photo_url: string;

    @Column()
    sizes: string;

    @Column()
    rent_price: number;
    
}
