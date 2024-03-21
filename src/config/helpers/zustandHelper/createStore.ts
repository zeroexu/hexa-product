import { create } from "zustand/index";


const createStore = <TState extends Record<string, any>>(originalState: TState) => {
    // Tipo para las keys de los métodos con valores booleanos
    type MethodKeys = Record<keyof TState, boolean>;

    // Inicializamos el control de isWorking para cada método
    const initialIsWorking: MethodKeys = Object.keys(originalState).reduce((acc, key) => {
        if (typeof originalState[key] === 'function') {
            acc[key as keyof TState] = false;
        }
        return acc;
    }, {} as MethodKeys);

    type CustomState = TState & { isWorking: MethodKeys }

    return create<CustomState>((set, get) => {
        // Asignamos el estado original y el control de isWorking
        const newState: CustomState = {
            ...originalState,
            isWorking: initialIsWorking,
        };

        // Iteramos sobre las keys del estado original para agregar el control de isWorking
        for (const key in originalState) {
            if (typeof originalState[key] === 'function') {
                // @ts-ignore
                newState[key as keyof TState] = (...args: any[]) => {
                    if (get().isWorking[key as keyof TState]) {
                        return; // Evitar la ejecución si el método ya está en curso
                    }

                    set((state) => ({
                        ...state,
                        isWorking: { ...state.isWorking, [key]: true },
                    }));

                    originalState[key as keyof TState](...args); // Ejecutar el método original

                    set((state) => ({
                        ...state,
                        isWorking: { ...state.isWorking, [key]: false },
                    }));
                };
            }
        }

        return newState;
    });
};

export default createStore