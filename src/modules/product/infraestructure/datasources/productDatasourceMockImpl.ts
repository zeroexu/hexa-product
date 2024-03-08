import { Environment } from "../../../../config/environment";
import { PromiseWrapper } from "../../../../config/helpers/promiseHelper/promiseWrapper";
import { ResponseData } from "../../../../config/helpers/promiseHelper/type";
import { Request } from "../../../../config/helpers/request";
import { ProductDatasource } from "../../domain/datasources/productDatasource";
import Product from "../../domain/entities/product";
import { ProductMapper } from "../mappers/productMapper";
import { MLSearchResult } from "../models/mlSearchResponseModel";

export class ProductDatasourceMock implements ProductDatasource {
    environment: Environment;

    constructor(config: Environment) {
        this.environment = config;
    }

    async getSearchProduct(term: string): Promise<ResponseData<Product[]>> {
        const promiseWrapped: ResponseData<MLSearchResult> = await PromiseWrapper<MLSearchResult>(Request.get, `${this.environment.SearchProductURL}/${term}`);
        const products: Product[] = promiseWrapped.response!.results.map(e => ProductMapper.productMLToEntity(e))
        return { ...promiseWrapped, response: products }
    }

    getProductDetail(id: string): Promise<ResponseData<Product>> {
        throw new Error("Method not implemented.");
    }

}