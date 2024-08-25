import { gql } from "@apollo/client";
export const GET_CHARACTERS = (page) => gql`
  query getCharacters {
    characters(page: ${page}) {
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
