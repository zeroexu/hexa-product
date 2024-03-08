import { Environment } from "./config/environment";
import { PromiseWrapper } from "./config/helpers/promiseHelper/promiseWrapper";
import { Request } from "./config/helpers/request";
import { ProductDatasourceMock } from "./modules/product/infraestructure/datasources/productDatasourceMockImpl";
import { ProductMapper } from "./modules/product/infraestructure/mappers/productMapper";
import { ProductRepositoryImpl } from "./modules/product/infraestructure/repositories/productRepositoryImpl";

export default {
    config: {
        helper: {
            ProductMapper,
            Request,
        },
        Environment
    },
    module: {
        product: {
            infraestructure: {
                datasources: {
                    ProductDatasourceMock,
                },
                repositories: {
                    ProductRepositoryImpl
                }
            }
        }
    }
}

