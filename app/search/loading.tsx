import SearchBar from "../components/SearchBar";

export default function Loading() {
  return (
    <main>
      <SearchBar />
      <div className="flex flex-row ml-[230px]">
        <div className="animate-pulse bg-slate-200 mt-6 w-56 h-80 m-3 rounded overflow-hidden border cursor-pointer"></div>
        <div className="mt-5 flex flex-col justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div
              key={num}
              className="animate-pulse ml-6 bg-slate-200 w-80 h-44 m-3 rounded overflow-hidden border cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}
