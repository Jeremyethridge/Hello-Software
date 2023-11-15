import { gql } from "@apollo/client";

export const QueryTutors = gql`
  query GetTutors {
    getTutors {
      name
      email
      rate
      skill
      payment
    }
  }
`;

export const QuerySingleTutor = gql`
  query GetSingleTutor($email: String) {
    getSingleTutor(email: $email) {
      name
      rate
      skill
      payment
    }
  }
`;

export const QueryClients = gql`
  query GetClients {
    getClients {
      name
      email
    }
  }
`;

export const QuerySingleClient = gql`
  query GetSingleClient($email: String) {
    getSingleClient(email: $email) {
      name
      email
    }
  }
`;
