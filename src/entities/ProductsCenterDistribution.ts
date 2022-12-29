import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { DistributionCenter } from "./ProductsSKU"

@Entity()
export class ProductsCenterDistribution extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    quantity:number

    @Column()
    minimumQuantity:number

    @Column()
    enabled:boolean

    @Column(()=>DistributionCenter)
    distributionCenter:DistributionCenter[]
}

