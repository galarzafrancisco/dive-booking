import { GearRequiredList } from "src/gear-required-lists/entities/gear-required-list.entity";
import { Item } from "src/items/entities/item.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class GearRequiredListLine {
    @PrimaryColumn()
    line_id: string;

    @Column()
    list_id: string;

    @ManyToOne(type => GearRequiredList, gear_required_list => gear_required_list.lines)
    @JoinColumn({name: 'list_id'})
    list: GearRequiredList

    @Column()
    item_id: string;

    @Column()
    optional: boolean;

    @ManyToOne(type => Item)
    @JoinColumn({name: 'item_id'})
    item: Item
}
