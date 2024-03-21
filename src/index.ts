import { Environment } from "./config/environment";
import { ProductDatasourceMock } from "./modules/product/infraestructure/datasources/productDatasourceMockImpl";
import { ProductRepositoryImpl } from "./modules/product/infraestructure/repositories/productRepositoryImpl";
import useProductStore from "./modules/product/presentation/store/productStore";

export default {
    Environment,
    ProductDatasourceMock,
    ProductRepositoryImpl,
    useProductStore
}

