import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  return (
    <nav className="bg-hite p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl p-1 ml-1">
        FindTable
      </Link>
      <div>
        <div className="flex flex-row mr-2">
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
}
