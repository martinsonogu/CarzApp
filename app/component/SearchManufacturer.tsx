"use client";
import { SearchManuFacturerProps } from "@/types";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
