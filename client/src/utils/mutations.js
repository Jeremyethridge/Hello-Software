export const CreateClient = gql`
  mutation CreateClient($clientInput: ClientInput) {
    createClient(ClientInput: $clientInput) {
      name
      email
      token
    }
  }
`;

export const CreateTutor = gql`
mutation CreateTutor($tutorInput: TutorInput) {
  createTutor(TutorInput: $tutorInput) {
    
  }
}
`;

export const ClientLogin = gql`
  mutation ClientLogin($loginInput: loginInput) {
    clientLogin(loginInput: $loginInput) {
      name
      email
      token
    }
  }
`;

export const TutorLogin = gql`
  mutation TutorLogin($loginInput: loginInput) {
    tutorLogin(loginInput: $loginInput) {
      name
      email
      rate
      skill
    }
  }
`;
