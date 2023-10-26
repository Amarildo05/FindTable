export default function ReserveForm() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
      />
      <button className=" bg-red-600 w-full p-3 text-white rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the{" "}
        <a href="" className="text-red-600">
          {" "}
          OpenTable Terms of Use{" "}
        </a>{" "}
        and{" "}
        <a href="" className="text-red-600">
          {" "}
          Privacy Policy{" "}
        </a>
        . Message & data rates may apply. You can opt out of receiving text
        messages at any time in your account settings or by replying STOP.
      </p>
    </div>
  );
}
