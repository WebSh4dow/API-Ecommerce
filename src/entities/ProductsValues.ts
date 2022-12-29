import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductsValuesProperties extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    sortOrder:number

}