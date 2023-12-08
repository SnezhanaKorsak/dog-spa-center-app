import { getClient } from "@/lib/client";
import { servicesQuery } from "@/lib/graphql/queries";

import { SpaServicesList } from "@/components/spa-cervices-list";
import { SpaService } from "@/types";

export const revalidate = 3600;

const SpaServicesPage = async () => {
  const { data }: { data: { services: SpaService[] } } =
    await getClient().query({
      query: servicesQuery,
    });

  return <SpaServicesList services={data.services} />;
};

export default SpaServicesPage;
