import Link from "next/link";
import NavBar from "../../../components/NavBar";
import RestaurantMenuHeader from "../../../components/restaurantPage/restaurantMenu/RestaurantMenuHeader";
import RestaurantMenuCard from "../../../components/restaurantPage/restaurantMenu/RestaurantMenuCard";

export default function RestaurantMenu() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
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
      </main>
    </main>
  );
}
