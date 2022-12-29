import { BaseEntity, Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductsLenght extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string
    
    @Column()
    referenceCode: string;
   
    @Column()
    name: string;

    @Column()
    sortOrder: number;

   
}


