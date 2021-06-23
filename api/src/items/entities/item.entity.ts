import { GearRequiredListLine } from "src/gear-required-list-lines/entities/gear-required-list-line.entity";
import { PackingList } from "src/packing-lists/entities/packing-list.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

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

    @OneToMany(type => PackingList, packing_list => packing_list.item)
    packing_lists: PackingList[]

    @OneToMany(type => GearRequiredListLine, gearRequiredListLine => gearRequiredListLine.item)
    gear_required_list_lines: GearRequiredListLine[];
}
