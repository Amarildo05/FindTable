"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <main className="bg-gray-200 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <nav className="bg-hite p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl p-1 ml-1">
            FindTable
          </Link>
          <div>
            <div className="mr-2">
              <button className="bg-blue-400 text-white border p-1 px-3 rounded mr-3">
                Sign in
              </button>
              <button className="border p-1 px-3 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* Header */}
        <div className="h-64 bg-gradient-to-r from-[#2d3a5f] to-[#4d619d] p-2">
          <div className="text-center mt-10">
            <h1 className="text-white text-5xl font-bold mb-2">
              Find your table for any occasion
            </h1>
            {/* Search Bar */}
            <div className="text-left text-lg py-3 m-auto flex justify-center">
              <input
                className="bg-white rounded mr-3 p-2 w-[450px]"
                type="text"
                placeholder="Location, Restaurant or Cuisine"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                className="rounded bg-red-600 px-9 py-2 text-white"
                onClick={() => {
                  if (location === "banana") return;
                  router.push("/search");
                }}
              >
                Let's go
              </button>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="py-3 px-36 mt-10 flex flex-wrap">
          {/* Card */}
          <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <Link href="/restaurant/milestones-grill">
              <img
                src="https://resizer.otstatic.com/v2/photos/xlarge/2/55796787.webp"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-base font-normal capitalize">
                  <p className="mr-3">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Tirana</p>
                </div>
                <p className="text-base mt-1 font-bold">Booked 3 times today</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </main>
  );
}
