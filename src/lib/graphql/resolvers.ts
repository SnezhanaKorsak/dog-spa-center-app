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
};
