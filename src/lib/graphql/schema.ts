import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Service {
    id: String!
    serviceName: String!
    description: String!
    price: String!
  }

  type PetProduct {
    id: String!
    category: String!
    image: String!
    description: String!
    collection: String!
    price: String!
  }

  type Query {
    services: [Service]
    getPetProducts: [PetProduct]
  }
`;
