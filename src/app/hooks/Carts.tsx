import React, { createContext, useState, useContext, ReactNode } from "react";

type CartItems = {
  id: number;
  price: number;
  img: string;
  title: string;
  quantity: number;
};

type DataContextType = {
  data: CartItems[];
  updateData: (
    id: number,
    price: number,
    imgSrc: string,
    title: string,
    productQuantity: number
  ) => void;
  clearCart: () => void;
  removeCartItem: (id: number) => void;
};

const DataContext = createContext<DataContextType>({
  data: [],
  updateData: () => {},
  clearCart: () => {},
  removeCartItem: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<CartItems[]>([]);

  const updateData = (
    id: number,
    itemPrice: number,
    imgSrc: string,
    productTitle: string,
    productQuantity: number
  ) => {
    setData((prevData) => {
      const itemIndex: number = prevData.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const updatedItems = prevData.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        return updatedItems;
      } else {
        const newItem: CartItems = {
          id: id,
          price: itemPrice,
          quantity: productQuantity,
          img: imgSrc,
          title: productTitle,
        };
        const updatedItems = [...prevData, newItem];

        return updatedItems;
      }
    });
  };

  const clearCart = () => {
    setData([]);
  };

  const removeCartItem = (idToRemove: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== idToRemove));
  };

  return (
    <DataContext.Provider
      value={{ data, updateData, clearCart, removeCartItem }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
