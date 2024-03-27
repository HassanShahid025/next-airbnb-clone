"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { differenceInDays } from 'date-fns';
import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal()
  return (
    <div
      onClick={searchModal.open}
      className="
      border-[1px] 
      w-full 
      md:w-auto 
      py-2 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    "
    >
      <div
        className="
        flex 
        flex-row 
        items-center 
        justify-between
      "
      >
        <div
          className="
          text-sm 
          font-semibold 
          px-6
        "
        >
          Anywhere
        </div>
        <div
          className="
          hidden 
          sm:block 
          text-sm 
          font-semibold 
          px-6 
          border-x-[1px] 
          flex-1 
          text-center
        "
        >
          Any Week
        </div>
        <div
          className="
          text-sm 
          pl-6 
          pr-2 
          text-gray-600 
          flex 
          flex-row 
          items-center 
          gap-3
        "
        >
          <div className="hidden sm:block">Add Guest
        </div>
          <div
            className="
            p-2 
            bg-rose-500 
            rounded-full 
            text-white
          "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
