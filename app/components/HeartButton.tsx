"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { SafeUser } from "@/app/types";
import useFavourite from "../hooks/useFavourite";

type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { hasFavourited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  });

  console.log(listingId);

  return (
    <div
      onClick={toggleFavourite}
      className="
      relative
      hover:opacity-80
      transition
      cursor-pointer
    "
    >
      <AiOutlineHeart
        size={28}
        className="
        fill-white
        absolute
        -top-[2px]
        -right-[2px]
      "
      />
      <AiFillHeart
        size={24}
        className={hasFavourited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
