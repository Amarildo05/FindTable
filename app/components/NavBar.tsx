import Link from "next/link";
import LoginModal from "./LoginModal";

export default function NavBar() {
  return (
    <nav className="bg-hite p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl p-1 ml-1">
        FindTable
      </Link>
      <div>
        <div className="flex flex-row mr-2">
          <LoginModal isSignin={true} />
          <LoginModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
}
