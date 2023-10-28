import Link from "next/link";
import RestaurantMenuHeader from "../../../components/restaurantPage/restaurantMenu/RestaurantMenuHeader";
import RestaurantMenuCard from "../../../components/restaurantPage/restaurantMenu/RestaurantMenuCard";

export default function RestaurantMenu() {
  return (
    <>
      <RestaurantMenuHeader />
      {/* Description Section */}
      <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          {/* Restaurant Navbar */}
          <nav className="flex font-medium border-b pb-2">
            <Link href="/restaurant/milestones-grill" className="mr-7">
              OverView
            </Link>
            <Link href="/restaurant/milestones-grill/menu" className="mr-7">
              Menu
            </Link>
          </nav>
          {/* Menu */}
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                <RestaurantMenuCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
