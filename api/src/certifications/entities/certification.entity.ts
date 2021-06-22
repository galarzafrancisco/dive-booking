import { Dive } from "src/dives/entities/dive.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Certification {
    @PrimaryColumn()
    certification_id: string

    @Column()
    name: string

    @OneToMany(type => Dive, dive => dive.cert_required)
    dives: Dive[]
}
