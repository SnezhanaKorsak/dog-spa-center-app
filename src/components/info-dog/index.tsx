"use client";

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { infoDogQuery } from "@/lib/graphql/queries";

import { InfoDogCardItem } from "@/components/info-dog-card-item";
import { InfoDogSearch } from "@/components/info-dog-search";

import { InfoDogType } from "@/types";

export const InfoDog = () => {
  const [searchName, setSearchName] = useState("");

  const [searchInfo, { data }] = useMutation(infoDogQuery);

  const info: InfoDogType[] = data ? data.searchDogInfo : [];

  const onSearchHandler = () => {
    searchInfo({ variables: { searchParam: searchName } });
  };

  const onSearchPressHandler = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      searchInfo({ variables: { searchParam: searchName } });
    }
  };

  return (
    <div>
      <InfoDogSearch
        searchName={searchName}
        setSearchName={setSearchName}
        onSearch={onSearchHandler}
        onKeyUp={onSearchPressHandler}
      />

      {info.length !== 0 &&
        info.map((dog) => (
          <InfoDogCardItem key={new Date().valueOf()} info={dog} />
        ))}
    </div>
  );
};
