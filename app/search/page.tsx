import Link from "next/link";
import NavBar from "../components/NavBar";
import SearchHeader from "../components/searchPage/SearchHeader";
import SearchSideBar from "../components/searchPage/SearchSideBar";
import RestaurantCardSearch from "../components/searchPage/RestaurantCardSearch";

export default function SearchPage() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCardSearch />
          </div>
        </div>
      </main>
    </main>
  );
}
