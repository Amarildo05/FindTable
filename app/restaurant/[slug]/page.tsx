import Link from "next/link";
import RestaurantHeader from "../../components/restaurantPage/RestaurantHeader";
import Title from "../../components/restaurantPage/Title";
import Rating from "../../components/restaurantPage/Rating";
import Images from "../../components/restaurantPage/Images";
import ReviewCard from "../../components/restaurantPage/ReviewCard";
import ReservationCard from "../../components/restaurantPage/ReservationCard";
import Description from "../../components/restaurantPage/Description";

export default function RestaurantDetails() {
  return (
    <>
      <RestaurantHeader />
      {/* Description Section */}
      <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* Restaurant Navbar */}
          <nav className="flex font-medium border-b pb-2">
            <Link href="/restaurant/milestones-grill" className="mr-7">
              OverView
            </Link>
            <Link href="/restaurant/milestones-grill/menu" className="mr-7">
              Menu
            </Link>
          </nav>
          <Title />
          <Rating />
          <Description />
          <Images />
          {/* Reviews */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              What 100 people are saying
            </h1>
            <div>
              <ReviewCard />
            </div>
          </div>
        </div>
        <ReservationCard />
      </div>
    </>
  );
}
