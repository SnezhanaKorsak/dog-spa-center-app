import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Service {
    id: String!
    serviceName: String!
    description: String!
    price: String!
  }

  type Query {
    services: [Service]
  }
`;
