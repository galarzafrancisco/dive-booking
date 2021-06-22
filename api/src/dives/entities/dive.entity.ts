import { Certification } from "src/certifications/entities/certification.entity";
import { GearRequiredList } from "src/gear-required-lists/entities/gear-required-list.entity";
import { Shop } from "src/shops/entities/shop.entity";
import { Site } from "src/sites/entities/site.entity";
import { Column, PrimaryColumn, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Dive {
    @PrimaryColumn()
    dive_id: string;

    @Column()
    site_id: string;
    
    @ManyToOne(type => Site)
    @JoinColumn({name: 'site_id'})
    site: Site

    @Column()
    date: number;

    @Column()
    gear_required_list_id: string;

    @ManyToOne(type => GearRequiredList)
    @JoinColumn({name: 'gear_required_list_id'})
    gear_required_list: GearRequiredList

    @Column()
    cert_required_id: string;

    @ManyToOne(type => Certification)
    @JoinColumn({name: 'cert_required_id'})
    cert_required: Certification

    @Column()
    shop_id: string;

    @ManyToOne(type => Shop, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'shop_id'})
    shop: Shop

    @Column()
    meeting_address: string;

}
