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

export const EDIT_BILL = gql`
mutation editBill($id: String!, $amount: Int){
  editBill(id: $id, amount: $amount){
    id
    howOwes
    amount
  }
}
`

export const ELIMINATE_BILL = gql`
  mutation eliminateBill($billId: ID!, $accountId: ID!) {
    createBill(billId: $billId, accountId: $accountId) {
      bool
      message
    }
  }
`;

export const ELIMINATE_ACCOUNT = gql`
  mutation eliminateAccount(
    $billArray: [String]!
    $id: String!
    $relatedUser: String!
  ) {
    eliminateAccount(
      id: $id
      billArray: $billArray
      relatedUser: $relatedUser
    ) {
      bool
      message
    }
  }
`;

export const EDIT_ACCOUNT = gql`
  mutation editAccount($id: String!, $name: String) {
    editAccount(id: $id, name: $name) {
      id
      name
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
