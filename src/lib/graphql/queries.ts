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

export const infoDogQuery = gql`
  mutation searchDogInfo($searchParam: String!) {
    searchDogInfo(searchParam: $searchParam) {
      name
      energy
      image_link
      good_with_other_dogs
      good_with_strangers
      min_life_expectancy
    }
  }
`;
