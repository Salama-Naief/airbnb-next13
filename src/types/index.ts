import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerificied"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerificied: string | null;
};
export type currentUser = User;

export type LocationType = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};
export type RentTypes = {
  category: string;
  location: LocationType | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
};
