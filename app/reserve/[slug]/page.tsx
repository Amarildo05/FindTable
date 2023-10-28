import ReserveForm from "../../components/reservePage/ReserveForm";
import ReservePageHeader from "../../components/reservePage/ReservePageHeader";

export default function ReservePage() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReservePageHeader />
        <ReserveForm />
      </div>
    </div>
  );
}
