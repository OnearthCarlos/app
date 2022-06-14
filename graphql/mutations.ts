import { gql } from "@apollo/client";

export const UPDATE_USERS = gql`
  mutation updateUsers($input: update_users_input!, $id: ID!) {
    update_users_item(data: $input, id: $id) {
      id
      name
      email
      birthday
      country
    }
  }
`;

export const DELETE_USERS = gql`
  mutation deleteUser($id: ID!) {
    delete_users_item(id: $id) {
      id
    }
  }
`;
