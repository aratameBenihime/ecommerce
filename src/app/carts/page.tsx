import { Metadata } from "next";
export const metadata: Metadata = {
  title: "One-Shop-Cart",
  description: "Your Carts",
};

import { CartItem, CheckOutForm } from "../components/index";
export default function CartPage() {
  return (
    <div className="px-10">
      <CartItem />
      <CheckOutForm />
    </div>
  );
}
