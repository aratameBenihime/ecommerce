"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import Snackbar, { SnackBarRef } from "../global/SnackBar";
import { useData } from "@/app/hooks/Carts";

export default function ProductItem(props: any) {
  const [quantity, setQuantity] = useState<number>(1);
  const { updateData } = useData();
  const snackBarRef = useRef<SnackBarRef>(null);

  const showSnackBar = () => {
    if (snackBarRef.current) {
      snackBarRef.current.snackBarHandler();
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : quantity;
  };

  const addItemToCart = () => {
    updateData(
      props.productDetails.id,
      props.productDetails.price as number,
      props.productDetails.image,
      props.productDetails.title,
      quantity
    );
    showSnackBar();
  };

  return (
    <div className="p-8">
      <div className="md:grid grid-cols-2">
        <img
          src={props.productDetails.image}
          alt={props.productDetails.title}
        />
        <div className="md:flex md:flex-col justify-center">
          <div className="flex flex-col justify-between h-[21rem] md:p-8 mt-8">
            <p>{props.productDetails.title}</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl">&#8377;{props.productDetails.price}</p>

              {/*Functional Component To choose Quantity */}
              <ChooseQuantity inc={increment} dec={decrement} val={quantity} />
            </div>
            <p>{props.productDetails.description}</p>

            {/*  //Product Item Button */}
            <div className="grid grid-cols-2">
              <div className="p-1">
                <button
                  className="w-full  h-[46px] p-2 bg-[#3e3b99] rounded-[3px]"
                  onClick={addItemToCart}
                >
                  Add To Cart
                </button>
              </div>
              <Link
                className="p-1"
                href={`/products/buy/${props.productDetails.id}`}
              >
                <button className="w-full h-[46px] p-2 bg-[#008000] rounded-[3px]">
                  Buy Now
                </button>
              </Link>
            </div>
            {/*  //Product Item Button */}
          </div>
          <Snackbar
            ref={snackBarRef}
            message={`Your 
              ${quantity === 1 ? " Item " : " Items "}
                Have Been Added To The Cart Successfully
           `}
          />
        </div>
      </div>
    </div>
  );
}

function ChooseQuantity(props: any) {
  return (
    <div className="flex items-center">
      <p className="mr-5">Quantity</p>
      <button onClick={props.dec}>
        <Image
          src="/svg/minus.svg"
          alt="Decrease Quantity"
          height={15}
          width={15}
        />
      </button>
      <p className="mx-3 flex flex-row justify-center items-center rounded-[4px] w-[24px] h-[24px] border-[1px] border-solid">
        {props.val}
      </p>
      <button onClick={props.inc}>
        <Image
          src="/svg/plus.svg"
          alt="Increase Quantity"
          height={15}
          width={15}
        />
      </button>
    </div>
  );
}
