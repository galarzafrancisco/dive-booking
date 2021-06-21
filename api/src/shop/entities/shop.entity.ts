import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Shop {
    @PrimaryColumn()
    shop_id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    emai: string;

    @Column()
    website: string;
    
}
