import Product from "../../domain/entities/product";
import { MLResult } from "../models/mlSearchResponseModel";

export class ProductMapper {
    static productMLToEntity(mlResult: MLResult): Product {
        const mlProduct: Product = {
            id: mlResult.id,
            title: mlResult.title,
            condition: mlResult.condition,
            thumbnail: mlResult.thumbnail,
            price: mlResult.price,
            currency_id: mlResult.currency_id
        }

        return mlProduct
    }
}