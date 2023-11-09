import SearchBar from "../SearchBar";

export default function () {
  return (
    <div className="h-64 bg-gradient-to-r from-[#2d3a5f] to-[#4d619d] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}
