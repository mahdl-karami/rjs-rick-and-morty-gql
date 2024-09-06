import { gql } from "@apollo/client";
export const getEpisodes = (episodeId) => gql`
query episodes {
  episode (id: ${episodeId}){
    name
    characters{
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
}`;
