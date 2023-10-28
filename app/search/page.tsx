import SearchHeader from "../components/searchPage/SearchHeader";
import SearchSideBar from "../components/searchPage/SearchSideBar";
import RestaurantCardSearch from "../components/searchPage/RestaurantCardSearch";

export default function SearchPage() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCardSearch />
        </div>
      </div>
    </>
  );
}
