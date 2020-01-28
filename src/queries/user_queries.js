import { gql } from "apollo-boost";

export const GET_ALL_USERS = gql`
  query {
    users {
      data {
        email
        name
        username
      }
    }
  }
`;

export const GET_USER_EMAIL = gql`
  query getuser($id: ID!) {
    user(id: $id) {
      email
      username
    }
  }
`;
