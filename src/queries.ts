import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page){
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