import NavBar from "../../components/NavBar";
import ReserveForm from "../../components/reservePage/ReserveForm";
import ReservePageHeader from "../../components/reservePage/ReservePageHeader";

export default function ReservePage() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <ReservePageHeader />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
}
