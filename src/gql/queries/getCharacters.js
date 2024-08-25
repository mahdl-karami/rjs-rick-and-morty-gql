import { gql } from "@apollo/client";
export const GET_CHARACTERS = (page = 1) => gql`
  query getCharacters {
    characters(page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
			results{
        id
        name
        image
        status
        species
        location{
          id
          name
        }
        episode{
          id
          name
        }
      }
    }
  }
`;
