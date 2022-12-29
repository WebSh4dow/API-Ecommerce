import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./Products";
@Entity()
export class SKU extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    referenceCode:string

    @Column()
    productReferenceCode:string
    @Column()

    eanCode:string
    @Column()

    presentation:string
    @Column()

    url:string
    @Column()

    price:number
    @Column()

    promotionalPrice:boolean
    @Column()

    master:boolean
    @Column()

    masterImage:boolean
    @Column()
    isFractionalStock:boolean

    @Column(()=>Stock)
    stock:Stock[]

    @Column(()=> DistributionCenter)
    distributionCenter:DistributionCenter[]
    
    @Column(()=>DistributionCenterList)
    DistributionCenterList:DistributionCenterList[]
}
@Entity()
export class DistributionCenter {
      @PrimaryGeneratedColumn()
      referenceCode:string

      @Column()
      postcode:string

      @Column()
      city:string

      @Column()
      state:string

      @Column()
      country:string

      @Column()
      district:string

      @Column()
      street:string

      @Column()
      complement:string

      @Column()
      number:number
}
@Entity()
export class DistributionCenterList extends BaseEntity{

    @Column(()=>Stock)
    stock:Stock[]

    @Column(()=> DistributionCenter)
    distributionCenter:DistributionCenter[]
}