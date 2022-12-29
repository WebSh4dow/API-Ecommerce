import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class taxProduct extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    ipi: number
    @Column()
    mvaOriginal: number
    @Column()
    mvaNationalSimple: number

    @Column(()=>taxSubstitutionProduct)
    taxsubstituitionProduct:taxSubstitutionProduct[]
}

export class taxSubstitutionProduct {
    @Column()
    mva:number

    @Column()
    state:string
}