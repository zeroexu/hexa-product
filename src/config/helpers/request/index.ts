export class Request {
    static get<T>(url: string): Promise<T> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error de red: ${response.status}`);
                }
                return response.json();
            })
            .then(response => {
                return response as T
            })
            .catch(error => {
                throw error
            });

    }
}