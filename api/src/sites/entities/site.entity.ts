import { Dive } from "src/dives/entities/dive.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Site {
    @PrimaryColumn()
    site_id: string;

    @Column()
    location: string;

    @Column()
    max_depth: number;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => Dive, dive => dive.site)
    dives: Dive[]

}
