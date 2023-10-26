export default function SearchSideBar() {
  return (
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
          <button className="border w-full font-light rounded-l p-2">$</button>
          <button className="border-r border-t border-b w-full font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
