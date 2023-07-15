"use client";

import { SafeUser } from "@/types";
import { Listing, Reservation, User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface ListingCartProps {
  data: Listing;
  reservation?: Reservation;
  currentUser: User | null;
  onAction?: (id: string) => void;
  actionLabel?: string;
  disabled?: boolean;
  actionId?: string;
}
const ListingCart: React.FC<ListingCartProps> = ({
  data,
  reservation,
  actionId,
  actionLabel,
  onAction,
  currentUser,
  disabled,
}) => {
  return (
    <div className="col-span-1 relative">
      <div
        className="
            w-full
            aspect-square
            overflow-hidden
            relative
        "
      >
        <Image
          src={data.imageSrc}
          fill
          className="
                object-cover 
                w-full 
                h-full 
                transition-all
                hover:scale-110
                rounded-xl
                cursor-pointer
                "
          alt={data.title}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ListingCart;
