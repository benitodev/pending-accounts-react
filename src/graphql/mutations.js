import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
      userLogged
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount($chosenUser: String!, $name: String!) {
    createAccount(chosenUser: $chosenUser, name: $name) {
      id
      name
    }
  }
`;

export const CREATE_BILL = gql`
  mutation createBill($amount: Int!, $account: String!, $howOwes: String!) {
    createBill(amount: $amount, account: $account, howOwes: $howOwes) {
      id
      amount
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;
