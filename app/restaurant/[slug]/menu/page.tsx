import Link from "next/link";

export default function RestaurantMenu() {
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
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Milestones Grill (Tirana)
            </h1>
          </div>
        </div>
        {/* Description Portion */}
        <div className="flex m-auto w-2/3 justify-between items-start  -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* Restaurant Navbar */}
            <nav className="flex font-medium border-b pb-2">
              <Link href="/restaurant/milestones-grill" className="mr-7">
                OverView
              </Link>
              <Link href="/restaurant/milestones-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* Menu */}
            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* Menu Card */}
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Surf and Truf</h3>
                    <p className="font-light mt-1 text-sm">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7">$80</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </main>
  );
}
