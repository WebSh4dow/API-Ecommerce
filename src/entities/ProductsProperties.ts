import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class PropertiesProducts extends BaseEntity {

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

    @Column()
    filterable: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
