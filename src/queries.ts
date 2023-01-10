import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql`
    {
        Characters{
            results {
                id
                name
                image
            }
        }  
    }
`;