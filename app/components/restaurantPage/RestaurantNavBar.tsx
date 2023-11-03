import Link from "next/link";

export default function RestaurantNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex font-medium border-b pb-2">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        OverView
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
