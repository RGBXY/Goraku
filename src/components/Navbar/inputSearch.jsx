"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if(keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input placeholder="Cari Anime" className="p-2  rounded w-full" ref={searchRef} onKeyDown={handleSearch} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} weight="bold" />
      </button>
    </div>
  );
};

export default InputSearch;
