"use client";
import { useEffect, useState } from "react";
import { useData } from "../hooks/Carts";

export default function CartItem() {
  const { data, clearCart, removeCartItem } = useData();

  const [showItems, setShowItems] = useState<boolean>(true);

  const [total, setTotal] = useState<string>("0");

  //Returns the Total Price
  useEffect(() => {
    const totalValue = data.reduce(
      (accumulator, obj) => accumulator + obj.quantity * obj.price,
      0
    );
    const roundedNum = totalValue.toFixed(2);
    setTotal(roundedNum);
  }, [data]);

  //Function to clear cart items
  function clearCartItem() {
    setShowItems(false);
    clearCart();
  }

  //function to remove a particular item
  function removeCartItemHandler(id: number) {
    removeCartItem(id);
  }

  //function to display the cartitems
  function handleItems() {
    setShowItems(!showItems);
  }
  return (
    <>
      <div className="mt-2 w-full ">
        <div className="flex justify-between w-full">
          <h1>Your Order</h1>
          <button onClick={handleItems} className="text-right">
            {showItems ? "Hide Full Summery" : "Show Full Summery"}
          </button>
        </div>

        {/*UI for Displaying the Cart Items */}
        {showItems && (
          <div className="mt-8">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex mb-8 items-center border-solid border-[1px] border-[#663399] py-2 px-6 rounded-[6px]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover h-[72px] w-[72px] mr-[5px]"
                  />
                  <div className="flex flex-col justify-between px-3 w-full">
                    <div>
                      <p className="text-xs">{item.title}</p>
                    </div>
                    <div>
                      <p className="text-xs mt-2"> &#8377;{item.price}</p>
                      <div className="text-xs mt-2 mb-2 flex justify-between items-center">
                        <p> Qt. {item.quantity}</p>
                        <button
                          className="bg-red-800 py-1 px-2 rounded-sm text-[13px]"
                          onClick={() => {
                            removeCartItemHandler(item.id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/*Button to Clear all the Cart Items */}
            {data.length !== 0 && (
              <button onClick={clearCartItem}>Clear Cart</button>
            )}
          </div>
        )}
        {/*Total Price Displayed */}
        <hr className="mt-5" />
        <div className="flex justify-between mt-3">
          <p>Total</p>
          <p>&#8377;{total}</p>
        </div>
      </div>
    </>
  );
}
