const { Clients, Tutors } = require("../models");
const generateAuthToken = require("../utils/auth");

const resolvers = {
  Query: {
    //return all registered clients
    getClients: async () => {
      try {
        const clients = await Clients.find();

        if (!clients) throw new Error("No clients found");

        return clients;
      } catch (error) {
        return error;
      }
    },

    //return single client using email
    getSingleClient: async (parent, { email }) => {
      try {
        const client = await Clients.findOne({ email });

        if (!client) throw new Error("Client not found");

        return client;
      } catch (error) {
        return error;
      }
    },

    //return all Tutors
    getTutors: async () => {
      try {
        const tutors = await Tutors.find();

        if (!tutors) throw new Error("No tutors found");

        return tutors;
      } catch (error) {
        return error;
      }
    },

    //return single tutor using email
    getSingleTutor: async (parent, { email }) => {
      try {
        const tutor = await Tutors.findOne({ email });

        if (!tutor) throw new Error("No tutor matching email provided");

        return tutor;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    //login as a client
    clientLogin: async (parent, { loginInput: { email, password } }) => {
      try {
        const client = await Clients.findOne({ email });

        if (!client) throw new Error(" Email is incorrect!");

        const validPassword = await client.checkPassword(password);

        if (!validPassword) throw new Error(" Password is incorrect!");

        const token = generateAuthToken(client);

        return { ...client._doc, token };
      } catch (error) {
        return error;
      }
    },

    //login as a tutor
    tutorLogin: async (parent, { loginInput: { email, password } }) => {
      try {
        const tutor = await Tutors.findOne({ email });
        console.log(email, password, tutor.checkPassword);

        if (!tutor) throw new Error("Email not associates with a tutor!");

        const validPassword = await tutor.checkPassword(password);

        if (!validPassword) throw new Error("Password incorrect!");

        const token = generateAuthToken(tutor);

        return { ...tutor._doc, token };
      } catch (error) {
        return error;
      }
    },

    //signup as new client
    createClient: async (
      parent,
      { ClientInput: { name, email, password } }
    ) => {
      return await Clients.create({ name, email, password });
    },

    //signup as new tutor
    createTutor: async (parent, { TutorInput }) => {
      return await Tutors.create({ ...TutorInput });
    },
  },
};

module.exports = resolvers;
