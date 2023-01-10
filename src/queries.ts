import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql`
    {
        characters(page: number){
            results {
                id
                name
                image
            }
            info {
                pages
            }
        }  
    }
`;