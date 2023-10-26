import Link from "next/link";

export default function RestaurantCardSearch() {
  return (
    <div className="border-b flex p-5">
      <img
        src="https://resizer.otstatic.com/v2/photos/xlarge/1/54951863.webp"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Cooper's Hawk Winery & Restaurant</h2>
        <div className="flex items-start mt-2">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-7">
          <div className="font-light flex">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Florida</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
}
