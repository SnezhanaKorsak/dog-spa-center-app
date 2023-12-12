import React from "react";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
