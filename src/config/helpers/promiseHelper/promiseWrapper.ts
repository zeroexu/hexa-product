import { ResponseData } from "./type";

export function PromiseWrapper<T>(promiseFunction: (...args: any[]) => Promise<T>, ...args: any[]): Promise<ResponseData<T>> {
    const nameCallback = promiseFunction?.name || '';
    console.log(nameCallback, "----", JSON.stringify(args))
    const promiseError = () => (new Promise(() => {
        throw new Error('Promise method is')
    }))
    return (promiseFunction || promiseError)(...args)
        .then(response => ({ name: nameCallback, response, error: undefined, isError: false }))
        .catch(error => ({ name: nameCallback, response: undefined, error, isError: true }));
}