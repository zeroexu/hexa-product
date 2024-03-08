import { ResponseData } from "../../../../config/helpers/promiseHelper/type";
import { ProductDatasource } from "../datasources/productDatasource";
import Product from "../entities/product";

export interface ProductRepository {
    datasource: ProductDatasource;
    getSearchProduct(term: string): Promise<ResponseData<Product[]>>;
    getProductDetail(id: string): Promise<ResponseData<Product>>;
}