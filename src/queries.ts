import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int, $name: String) {
        characters(page: $page, filter: {name: $name}){
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

export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id){
            id
            name
            image
            gender
            species
            status
            type
        }  
    }
`;