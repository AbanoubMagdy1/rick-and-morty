import { ApolloError } from "@apollo/client";

export function formatError(error: ApolloError | undefined) : string{
    if(error) return error?.message || 'Something went wrong, please try again later'
    return '';
}