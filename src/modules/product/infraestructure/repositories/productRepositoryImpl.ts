import { ResponseData } from "../../../../config/helpers/promiseHelper/type";
import { ProductDatasource } from "../../domain/datasources/productDatasource";
import Product from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/productRepository";

export class ProductRepositoryImpl implements ProductRepository {
    datasource: ProductDatasource;

    constructor(dataSourceRef: ProductDatasource) {
        this.datasource = dataSourceRef;
    }

    getSearchProduct(term: string): Promise<ResponseData<Product[]>> {
        return this.datasource.getSearchProduct(term);
    }

    getProductDetail(id: string): Promise<ResponseData<Product>> {
        return this.datasource.getProductDetail(id);
    }

}