import { Router } from "express";
import {findPropertiesProducts,findPropertiesProductsBy,findPropertiesProductsByleght, findAllPropertiesProductsByleght,findValuesPropertiesProducts} from '../controllers/products.properties.controllers'
import { createProducts,updateProducts,findProducts } from "../controllers/variants.products.controller";
import { findSku,findDistributionCenter } from "../controllers/products.skus.controller";
import { findBasesIcms } from "../controllers/products.base.icms.controller";
import { findTaxProducts } from "../controllers/products.tax.controller"; 
import { findStatusProducts } from "../controllers/products.status.controller";
import { findProductsDistributionCenter } from "../controllers/products.center.dist.controller";
const router = Router()


router.get('/api/products/properties/tamanho',findAllPropertiesProductsByleght)
router.get('/api/products/properties/value',findValuesPropertiesProducts)
router.get('/api/products/properties/',findPropertiesProducts)
router.get('/api/stocks/',findProductsDistributionCenter)

router.get('/api/products/properties/:referenceCode',findPropertiesProductsBy)
router.get('/api/products/properties/tamanho/:referenceCode',findPropertiesProductsByleght)
router.get('/api/products',findProducts)
router.get('/api/products/status/',findStatusProducts)

router.get('/api/products/variants',findSku)
router.get('/api/products/stocks',findDistributionCenter)
router.get('/api/products/tax-substitution/',findBasesIcms)
router.get('/api/products/taxes/',findTaxProducts)




router.post('/api/products/',createProducts)



router.put('/api/products/:id',updateProducts)









export default router