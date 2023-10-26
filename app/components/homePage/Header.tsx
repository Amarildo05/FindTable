"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
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
  );
}
