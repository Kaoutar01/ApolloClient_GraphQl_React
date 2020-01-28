import { gql } from "apollo-boost";

export const COUNTER_QUERY = gql`
  {
    counter @client
  }
`;
