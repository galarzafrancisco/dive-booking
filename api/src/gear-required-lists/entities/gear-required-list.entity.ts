import { GearRequiredListLine } from "src/gear-required-list-lines/entities/gear-required-list-line.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class GearRequiredList {
    @PrimaryColumn()
    list_id: string;

    @Column()
    name: string
    
    @Column()
    description: string

    @OneToMany(type => GearRequiredListLine, gear_required_list_line => gear_required_list_line.list_id)
    lines: GearRequiredListLine[]
}
