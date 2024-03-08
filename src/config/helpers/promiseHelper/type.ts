export interface ResponseData<T> {
    name: string,
    response?: T;
    error?: any;
    isError: boolean;
}