import { gql } from "@apollo/client";
export const getCharactersById = (ids) => gql`
query charactersById {
  charactersByIds(ids: [${ids}]){
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
`;
