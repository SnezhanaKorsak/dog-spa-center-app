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

  type InfoDog {
    name: String!
    energy: Int!
    image_link: String!
    good_with_other_dogs: Int!
    good_with_strangers: Int!
    min_life_expectancy: Int!
  }

  type Query {
    services: [Service]
    getPetProducts: [PetProduct]
  }

  type Mutation {
    searchDogInfo(searchParam: String!): [InfoDog]
  }
`;
