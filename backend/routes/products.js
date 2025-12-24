import express from "express"
import { getProduct, postProduct , putProduct , deleteProduct } from "../controllers/product.controller.js"


const router = express.Router()

router.get('/', getProduct)

router.post('/', postProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', putProduct)

export default router