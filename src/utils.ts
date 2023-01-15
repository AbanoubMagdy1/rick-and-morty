import { ApolloError } from "@apollo/client";

export function formatError(error: ApolloError | undefined) : string{
    if(error) return error?.message || 'Something went wrong, please try again later'
    return '';
}

export function debounce(fn: Function, ms: number = 500) {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn(...args);
        }, ms);
    };
}