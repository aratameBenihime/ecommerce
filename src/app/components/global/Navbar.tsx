"use client";
import { useState, useEffect } from "react";
import { useData } from "@/app/hooks/Carts";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const { data } = useData();

  const [noOfItems, setNoOfItems] = useState<number>(0);

  useEffect(() => {
    setNoOfItems(data.length);
  }, [data]);
  return (
    <div
      className="h-[64px] w-full bg-black flex flex-row justify-between 
                    items-center px-8 py-4 hover:cursor-pointer fixed top-0 left-0 "
    >
      <Link href="/">
        <h1 className="font-bold text-lg text-[#d2d2d2]">One-Shop</h1>
      </Link>
      <Link href="/carts" className="flex relative">
        <Image
          src="/svg/shopping_cart.svg"
          alt="Shopping Cart"
          priority
          height={28}
          width={28}
        />

        <p
          className="h-[17px] w-[17px] absolute top-[-2px] right-[-9px] z-[20] bg-[#ad0000] flex 
                    justify-center items-center text-xs font-bold rounded-[100%] text-black"
        >
          {noOfItems}
        </p>
      </Link>
    </div>
  );
}
