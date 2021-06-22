import { GearRequiredListLine } from "src/gear-required-list-lines/entities/gear-required-list-line.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryColumn()
    item_id: string;

    @Column()
    name: string;
    
    @Column()
    photo_url: string;
    
    @Column()
    sizes: string;

    @Column()
    rent_price: number

}
