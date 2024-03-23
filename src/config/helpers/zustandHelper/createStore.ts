import { StoreApi, create, } from "zustand";

// Función para crear el store con control de isWorking
const createStore = <TState extends Record<string, any>>(
    createStateCallback: (set: StoreApi<TState>['setState'], get: StoreApi<TState>['getState']) => TState
) => {
    return create<TState>((set, get) => {
        // Creamos el estado inicial utilizando la función de callback
        const initialState = createStateCallback(set, get);

        // Inicializamos el control de isWorking para cada método
        const initialIsWorking = Object.keys(initialState).reduce((acc, key) => {
            if (typeof initialState[key] === 'function') {
                // @ts-ignore
                acc[key as keyof TState] = false;
            }
            return acc;
        }, {} as Record<string, boolean>);

        // Combinamos el estado inicial con el control de isWorking
        const stateWithControl = { ...initialState, isWorking: initialIsWorking } as TState & { isWorking: Record<string, boolean> };

        // Creamos un objeto que contenga los métodos con control de isWorking

        const methodsWithControl = Object.keys(stateWithControl).reduce((acc, key) => {

            if (typeof stateWithControl[key] === 'function') {

                acc[key] = async (...args: any[]) => {
                    if (get().isWorking[key]) return; // Evitar la ejecución si el método ya está en curso
                    set((state) => ({ ...state, isWorking: { ...state.isWorking, [key]: true } }));
                    await stateWithControl[key](...args); // Ejecutar el método original
                    set((state) => ({ ...state, isWorking: { ...state.isWorking, [key]: false } }));
                };
            }
            return acc;
        }, {} as Record<string, () => void | Promise<void>>);

        return { ...stateWithControl, ...methodsWithControl };
    });
};

export default createStore