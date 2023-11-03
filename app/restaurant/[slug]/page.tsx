import Title from "../../components/restaurantPage/Title";
import Rating from "../../components/restaurantPage/Rating";
import Images from "../../components/restaurantPage/Images";
import ReviewCard from "../../components/restaurantPage/ReviewCard";
import ReservationCard from "../../components/restaurantPage/ReservationCard";
import Description from "../../components/restaurantPage/Description";
import { PrismaClient } from "@prisma/client";
import RestaurantNavBar from "../../components/restaurantPage/RestaurantNavBar";

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  //just for now
  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  //test
  console.log({ restaurant });
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
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
    </>
  );
}
