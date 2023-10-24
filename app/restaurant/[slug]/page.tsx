import Link from "next/link";

export default function RestaurantDetails() {
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
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* Restaurant Navbar */}
            <nav className="flex font-medium border-b pb-2">
              <Link href="/restaurant/milestones-grill" className="mr-7">
                OverView
              </Link>
              <Link href="/restaurant/milestones-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* Title */}
            <div className="mt-4 border-b p-6">
              <h1 className="font-bold text-6xl">Milestone Grill</h1>
            </div>
            {/* Rating */}
            <div className="flex font-medium items-end">
              <div className="mt-2 flex items-center">
                <p>*****</p>
                <p className="ml-3">4.9</p>
              </div>
              <div>
                <p className="ml-4">600 Reviews</p>
              </div>
            </div>
            {/* Description */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* Images */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701563.webp"
                  alt=""
                  className="w-56 h-44 mr-1 mb-1"
                ></img>
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701567.webp"
                  alt=""
                  className="w-56 h-44 mr-1 mb-1"
                ></img>
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701564.webp"
                  alt=""
                  className="w-56 h-44 mr-1 mb-1"
                ></img>
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701569.webp"
                  alt=""
                  className="w-56 h-44 mr-1 mb-1"
                ></img>
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701571.webp"
                  alt=""
                  className="w-56 h-44 mr-1 mb-1"
                ></img>
              </div>
            </div>
            {/* Reviews */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* Review Card */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-2xl text-white">AK</h2>
                      </div>
                      <p className="mt-1 text-center">Amarildo Kola</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          It was a quiet Sunday on the patio, only a few tables
                          seated. Excellent service and care taken for food
                          allergies and a birthday celebration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Card */}
          <div className="w-[27%] relative">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" id="" className="py-3 border-b font-light">
                  <option value="">1 person</option>
                  <option value="">2 prople</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-2 font-light w-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-14">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
