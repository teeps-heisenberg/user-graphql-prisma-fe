import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id
      username
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUserById($id: Int!) {
    findUserById(bookId: $id) {
      id
      username
      email
    }
  }
`;
