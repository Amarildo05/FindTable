import Link from "next/link";

export default function NavBar() {
  return (
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
  );
}
