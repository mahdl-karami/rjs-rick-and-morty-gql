import { gql } from "@apollo/client";
export const GET_INFO = gql`
  query getInfo {
    characters {
      info {
        count
      }
    }
    locations {
      info {
        count
      }
    }
    episodes {
      info {
        count
      }
    }
  }
`;
