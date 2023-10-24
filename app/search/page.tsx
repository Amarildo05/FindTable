import Link from "next/link";

export default function SearchPage() {
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
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
          {/* Search Bar */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="bg-white rounded mr-3 p-2 w-[450px]"
              type="text"
              placeholder="Location, Restaurant or Cuisine"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white">
              Let's go
            </button>
          </div>
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* Search Side Bar */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2 font-medium">Region</h1>
              <p className="font-light">Toronto</p>
              <p className="font-light">Florida</p>
              <p className="font-light">Las Vegas</p>
              <p className="font-light">New York</p>
              <p className="font-light">Boston</p>
              <p className="font-light">Los Angeles</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2 font-medium">Cuisine</h1>
              <p className="font-light">Mexican</p>
              <p className="font-light">Italian</p>
              <p className="font-light">Albanian</p>
              <p className="font-light">Japanese</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className="mb-2 font-medium">Price</h1>
              <div className="flex">
                <button className="border w-full font-light rounded-l p-2">
                  $
                </button>
                <button className="border-r border-t border-b w-full font-light p-2">
                  $$
                </button>
                <button className="border-r border-t border-b w-full font-light p-2 rounded-r">
                  $$$
                </button>
              </div>
            </div>
          </div>
          <div className="w-5/6">
            {/* Restaurant Card */}
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
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
