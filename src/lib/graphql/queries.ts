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
