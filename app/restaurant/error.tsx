"use client";

import Image from "next/image";
import errorMascot from "../../public/icons/error.png";

export default function Error() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8" />
      <div className="text-center bg-white w-72 px-9 py-14 shadow rounded-lg">
        <p className="text-base font-bold">An Error Occurred</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
}
