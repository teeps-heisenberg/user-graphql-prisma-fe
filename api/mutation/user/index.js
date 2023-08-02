import { gql } from "apollo-boost";
export const CREATE_USER = gql`
  mutation AddUser($addUserArgs: AddUserArgs!) {
    createUser(addUserArgs: $addUserArgs) {
      id
      username
      email
    }
  }
`;
