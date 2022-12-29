import {config} from 'dotenv'
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
import { DataSource } from "typeorm";
import {PropertiesProducts} from "./entities/ProductsProperties"
import {ProductsLenght} from "./entities/ProductsLength"
import { Variants,metaTags,Product,Categories,Stock,dimensionGroup } from "./entities/Products";
import {SKU,DistributionCenter,DistributionCenterList}  from "./entities/ProductsSKU"
import { ProductsValuesProperties } from "./entities/ProductsValues";
import { BaseICMS } from "./entities/ReduceBaseICMS";
import { taxProduct,taxSubstitutionProduct } from "./entities/ProductsTax";
import { Status,shoppingStore,variantsProducts } from "./entities/ProductStatus";
import { ProductsCenterDistribution } from "./entities/ProductsCenterDistribution";
import 'reflect-metadata'
export const AppDataSource = new DataSource ({

    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities:[ 
        PropertiesProducts,
        ProductsLenght,
        Variants,metaTags,
        Product,Categories,
        Stock,
        dimensionGroup,
        SKU,
        DistributionCenter,
        DistributionCenterList,
        ProductsValuesProperties,
        BaseICMS,
        taxProduct,
        taxSubstitutionProduct,
        Status,
        shoppingStore,
        variantsProducts,
        ProductsCenterDistribution
      ],
    migrations:["src/migrations/*.ts"],
    logging:true,
    synchronize:true

})
