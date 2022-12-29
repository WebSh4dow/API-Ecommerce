import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Status extends BaseEntity{
    
@Column(()=>variantsProducts)
productsVariants:variantsProducts[]

@PrimaryGeneratedColumn()
id:number

@PrimaryGeneratedColumn('uuid')
uuid:string

@Column()
referenceCode:string

@Column()
note:string

@Column({type:'date'})
createdAt:Date

@Column()
changeBy:string

@Column(()=>shoppingStore)
shoppingStore:shoppingStore[]


}
@Entity()
export class shoppingStore {

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    referenceCode:string

}
@Entity()
export class variantsProducts{

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    referenceCode:string
}

