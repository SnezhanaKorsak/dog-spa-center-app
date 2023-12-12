export const resolvers = {
  Query: {
    services: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MOCK_API_URL}/services`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return await res.json();
    },

    getPetProducts: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_MOCK_API_URL}/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return await res.json();
    },
  },
  Mutation: {
    searchDogInfo: async (parent: never, args: { searchParam: string }) => {
      const name = args.searchParam;

      if (!name) {
        return null;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_DOG_API_URL}${name}`, {
        method: "GET",
        headers: {
          "X-Api-Key": `${process.env.NEXT_PUBLIC_DOG_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      return await res.json();
    },
  },
};
