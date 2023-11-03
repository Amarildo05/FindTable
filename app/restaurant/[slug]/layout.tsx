import RestaurantHeader from "../../components/restaurantPage/RestaurantHeader";

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <main>
      <RestaurantHeader name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
        {children}
      </div>
    </main>
  );
}
