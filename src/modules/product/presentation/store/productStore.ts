import createStore from "src/config/helpers/zustandHelper/createStore";
import Product from "../../domain/entities/product";

// Definimos las interfaces para el estado y los métodos
export interface ProductStateProps {
    products: Product[];
    getProducts: () => void;
    getProductDetail: () => void;
}

// Crear el store de productos con el middleware
const useProductStore = createStore<ProductStateProps>({
    products: [],
    getProducts: () => {
        // Lógica para obtener productos
    },
    getProductDetail: () => {
        // Lógica para obtener detalles de un producto
    },
});

export default useProductStore

// Ejemplo de uso
//useProductStore.getState().getProducts(); // Ejecutar método getProducts con control de isWorking
