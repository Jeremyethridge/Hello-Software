const typeDefs = `

type Client {
    _id: ID
    name: String
    email: String
    token: String
}

type Tutor {
    _id: ID
    name: String
    email: String
    skill: [String]
    rate: Int
    token: String
}

input ClientInput{
    name: String!
    email: String!
    password: String!
}

input loginInput{
    email: String!
    password: String!
}

input TutorInput{
    name: String!
    email: String!
    password: String!
    skill: [String]!
    rate: Int!
}

type Query {
    getClients:[Client]
    getSingleClient(email: String): Client
    getTutors:[Tutor]
    getSingleTutor(email: String): Tutor
}

type Mutation {
    createClient(ClientInput: ClientInput): Client
    createTutor(TutorInput: TutorInput): Tutor
    clientLogin(loginInput: loginInput): Client
    tutorLogin(loginInput: loginInput): Tutor
}
`;

module.exports = typeDefs;
