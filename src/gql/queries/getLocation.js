import { gql } from "@apollo/client";
export const getLocation = (locationId) => gql`
query location {
  location(id: ${locationId}){
    name
    residents{
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
