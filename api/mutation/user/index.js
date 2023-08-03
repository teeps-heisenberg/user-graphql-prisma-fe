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

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $updateArgs: UpdateUserArgs!) {
    updateUser(bookId: $id, updateUserArgs: $updateArgs) {
      id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUserById(bookId: $id) {
      id
      username
      email
    }
  }
`;
