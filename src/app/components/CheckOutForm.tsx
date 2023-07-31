export default function CheckOutForm() {
  return (
    <form action="">
      <Input message="Email Address" />
      <Input message="Name on card" />
      <Input message="Card Number" />
      <Input message="Card Number" />
      <Input message="Address" />
      <div className="grid grid-cols-3 gap-6">
        <Input message="City" />
        <Input message="State/Province" />
        <Input message="Postal Code" />
      </div>
      <button
        className="w-full p-2 bg-[#6a68f9] text-white mt-10 rounded-full"
        type="submit"
      >
        Pay Now
      </button>
      <div className="h-[80px] w-full"></div>
    </form>
  );
}

function Input(props: any) {
  return (
    <div className="mt-5">
      <p className="text-[13px] mb-2">{props.message}</p>
      <input
        type="text"
        className="bg-transparent border-2 border-solid border-[#363636] w-full py-2 pl-2"
        autoComplete="off"
        required
      />
    </div>
  );
}
