import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query getCharacters {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
      }
    }
  }
`;
