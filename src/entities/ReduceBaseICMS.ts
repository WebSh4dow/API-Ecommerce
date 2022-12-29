import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseICMS extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    originState:string

    @Column()
    destinationState:string

    @Column()
    tax:number

}