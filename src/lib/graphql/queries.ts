import { gql } from "@apollo/client";

export const servicesQuery = gql`
  query {
    services {
      id
      serviceName
      description
      price
    }
  }
`;

export const productsQuery = gql`
  query {
    getPetProducts {
      id
      category
      image
      description
      collection
      price
    }
  }
`;
