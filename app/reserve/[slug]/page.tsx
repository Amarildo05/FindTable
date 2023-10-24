import Link from "next/link";

export default function ReservePage() {
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
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* Header */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/54951863.webp"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">
                    Cooper's Hawk Winery & Restaurant
                  </h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Mon, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Requests (optional)"
              />
              <button className=" bg-red-600 w-full p-3 text-white rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking “Complete reservation” you agree to the{" "}
                <a href="" className="text-red-600">
                  {" "}
                  OpenTable Terms of Use{" "}
                </a>{" "}
                and{" "}
                <a href="" className="text-red-600">
                  {" "}
                  Privacy Policy{" "}
                </a>
                . Message & data rates may apply. You can opt out of receiving
                text messages at any time in your account settings or by
                replying STOP.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
