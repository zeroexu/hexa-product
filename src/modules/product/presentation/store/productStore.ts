import createStore from "../../../../config/helpers/zustandHelper/createStore";
import Product from "../../domain/entities/product";
import { ProductRepositoryImpl } from "../../infraestructure/repositories/productRepositoryImpl";

// Definimos las interfaces para el estado y los métodos
export interface ProductStateProps {
    products: Product[];
    getProducts: (searchParam: string) => Promise<void>;
    getProductDetail: () => Promise<void>;
}

// Crear el store de productos con el middleware
const useProductStore = (productRepository: ProductRepositoryImpl) => createStore<ProductStateProps>((set, get) => ({
    products: [],
    getProducts: async (searchParam: string) => {
        const { response, isError } = await productRepository.getSearchProduct(searchParam);
        set(state => ({ ...state, products: response, isError }));
    },
    getProductDetail: async () => {
        // Lógica para obtener detalles de un producto
    },
}));

export default useProductStore
