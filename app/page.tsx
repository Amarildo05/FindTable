import Header from "./components/homePage/Header";
import RestaurantCard from "./components/homePage/RestaurantCard";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </main>
  );
}
