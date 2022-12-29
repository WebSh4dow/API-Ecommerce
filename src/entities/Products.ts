import { BaseEntity, Column, Double, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class images {

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    url:string

    @Column()
    isMaster:boolean
}
@Entity()
export class metaTags extends BaseEntity{

   @PrimaryGeneratedColumn('increment')
   id:number

   @PrimaryGeneratedColumn('uuid')
   uuid:string

 @PrimaryGeneratedColumn({type:'bigint'})
 trackingId:string

 @Column()
 title:string

 @Column()
 description:string

 @Column()
 url:string

 @Column()
 keyword:string

 @Column(()=>images)
 images:images[]

 @Column(()=>properties)
 properties:properties[]

 }
 @Entity()
 export class productsRelated{

   @PrimaryGeneratedColumn('increment')
   id:number

   @PrimaryGeneratedColumn('uuid')
   uuid:string

    @Column()
    typeReferenceCode:string

    @Column()
    variantReferenceCode:string

    @Column()
    quantity:number

    @Column()
    groupReferenceCode:string
 }

   @Entity()
   export class properties{

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    referenceCode:string
    @Column()
    value:string

    @Column(()=>videos)
    videos:videos[]
 }
   @Entity()
   export class videos{

    @PrimaryGeneratedColumn('increment')
    id:number

    @PrimaryGeneratedColumn('uuid')
    uuid:string

    @Column()
    code:string

    @Column()
    description:string

    @Column(()=>productsRelated)
    productsReleted:productsRelated[]
 }

@Entity()
export class Product extends BaseEntity {
    
@PrimaryGeneratedColumn('increment')
id:number

@PrimaryGeneratedColumn('uuid')
uuid:string

@Column({nullable:false})
name:string

@Column()	
slug:string

@Column({nullable:false})	
referenceCode:string 

@Column()
stockControl:boolean

@Column({nullable:false})
availableFor:string

@Column({nullable: false})  
ncm:boolean

@Column({nullable:false})
integrationCode:string

@Column({nullable:false})
productType:string

@Column(()=> Variants)
variants:Variants[]

}

@Entity()
export class Variants extends BaseEntity {

 @PrimaryGeneratedColumn({type:'bigint'})
 id:number

 @Column({type:'text'})
 referenceCode:string

 @Column({type:'bigint'})
 criteriaReferenceCode:string

 @Column({type:'bigint'})
 variantReferenceCode:string

 @Column({type:'bigint'})
 typeReferenceCode:string

 @Column({type:'bigint'})
 groupReferenceCode:string

 @Column()
 codeIntegration: string

 @Column()
 codeNcm:string

 @Column({type:'date'})
 dateInativated:Date

 @Column({type:'boolean'})
 master:boolean

 @Column({type:'text'})
 presentation:string

 @Column({type:'text'})
 descriptionOne:string

 @Column({type:'text'})
 descriptionTwo: string

 @Column({type:'text'})
 descriptionThree: string

 @Column({type:'text'})
 descriptionFour: string

 @Column({type:'float'})
 price:number

 @Column()
 quantity:number

 @Column({type:'boolean'})
 isFractionalStock:boolean

 @Column()
 eanCode:string

 @Column()
 additionalDeliveryTime:number

 @Column()
 enabledForEmptyPriceList:boolean

 @Column()
 minimumQuantity:number

 @Column()
 code:string

 @Column()
 active:boolean

 @Column()
 value:string

 @Column(()=>Stock)
 stock:Stock[]

 @Column(()=>dimensionGroup)
 dimensionGroup:dimensionGroup[]

 @Column(()=> Categories)
 categories:Categories[]

 @Column(()=>metaTags)
 metaTags:metaTags[]

}
@Entity()
export class Categories  {

@PrimaryGeneratedColumn('increment')
id:number

@PrimaryGeneratedColumn('uuid')
uuid:string

@Column('text')
categories:string

}
@Entity()
export class dimensionGroup {  

 @PrimaryGeneratedColumn('uuid')
 uuid:string

 @Column({type:'float'})
 height:number

 @Column({type:'float'})
 width:number

 @Column({type:'float'})
 weight:number

 @Column({type:'float'})
 depth:number

}
   @Entity()
   export class Stock {

   @PrimaryGeneratedColumn('increment')
   id:number
  
   @PrimaryGeneratedColumn('uuid')
   uuid:string

    @Column()
    quantity:number

    @Column()
    minimumQuantity:number

    @Column({type:'boolean'})
    enabled:boolean
}




