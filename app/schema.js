import { gql } from 'apollo-server-express';

const schema = gql`
  #scalar is a type that you define if it's not a scalar default existing(Int, Float, String, Boolean and ID)
  scalar Date

  #define the table you use from your database
  type Person {
    lastname: String!
    firstname: String!
    birthdate: Date
  }

  type Query {
    getAllPersons: [Person]
    # here we declare 2 variables
    getPersonByName(lastname: String, firstname: String): [Person] # le name resolver will reach the name, so if you put firstname, you have to do a get(firstname)
    getPersonByDate(date: Date!): [Person]
  }

  # Any changes you can do to the database
  type Mutation {
    createPerson(lastname: String, firstname: String, birthdate: Date): Person
    deleteByDate(birthdate: Date!): Boolean
    updateByName(oldName: String!, newName: String!): Person
  }
`;
export { schema };
