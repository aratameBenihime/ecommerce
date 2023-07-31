"use client";
import { useRef, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
type Props = {
  message: string;
};

export type SnackBarRef = {
  snackBarHandler: () => void;
};

const SnackBar = forwardRef<SnackBarRef, Props>((props, ref) => {
  const snackBarRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    snackBarHandler: () => {
      console.log("Working");

      snackBarRef.current?.classList.add("displaySnackBar");
      setTimeout(() => {
        snackBarRef.current?.classList.remove("displaySnackBar");
      }, 1500);
    },
  }));

  return (
    <div
      ref={snackBarRef}
      className="w-full h-[55px] flex flex-row justify-center items-center p-[10px]
       bg-white text-black text-[13px] fixed z-[100] left-0 bottom-[-63px] transition-all duration-300 ease-in-out"
    >
      <h1>{props.message}</h1>
      <Image
        src="/svg/rounded_check.svg"
        alt="Checked"
        height={15}
        width={15}
        className="ml-1"
      />
    </div>
  );
});

export default SnackBar;
