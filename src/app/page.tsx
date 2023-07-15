import EmptyState from "@/components/Utils/EmptyState";
import { getListings } from "./actions/getListings";
import ListingCart from "@/components/Utils/ListingCart";
import getCurrentUser from "./actions/getCurrent";
import { Listing } from "@prisma/client";

export default async function HomePage() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  const empty = true;

  if (!listings) {
    return <EmptyState showReset />;
  }
  return (
    <main className="relative container mx-auto">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          "
      >
        {listings?.map((listing: Listing) => (
          <ListingCart
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </main>
  );
}
