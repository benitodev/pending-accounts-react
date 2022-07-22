import { gql } from "@apollo/client";

export const IS_LOGGED_IN = gql`
  query isUserLoggedIn {
    isLoggedIn @client
  }
`;

export const ALL_USERS = gql`
  query {
    allUsers {
      id
      username
      accounts {
        name
      }
    }
  }
`;

export const FIND_USER = gql`
  query getUser($id: String) {
    getUser(id: $id) {
      username
      id
    }
  }
`;

export const FIND_ACCOUNT = gql`
  query findAccount($userSelected: String!) {
    findAccount(userSelected: $userSelected) {
      id
      name
      bills {
        id
        howOwes
        amount
        createdAt
      }
    }
  }
`;

export const FIND_DATA_TO_DELETE_ACCOUNT = gql`
  query findToDeleteAccount($userSelected: String!) {
    findAccount(userSelected: $userSelected) {
      id
      bills {
        id
      }
    }
  }
`;
