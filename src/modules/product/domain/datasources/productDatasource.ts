import { Environment } from "../../../../config/environment";
import { ResponseData } from "../../../../config/helpers/promiseHelper/type";
import Product from "../entities/product";

export interface ProductDatasource {
    environment: Environment;
    getSearchProduct(term: string): Promise<ResponseData<Product[]>>;
    getProductDetail(id: string): Promise<ResponseData<Product>>;
}