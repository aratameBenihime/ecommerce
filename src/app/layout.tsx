"use client";
import "./globals.css";
import { DataProvider } from "./hooks/Carts";
import { Inter } from "next/font/google";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DataProvider>
        <body
          className={`${inter.className} flex flex-col justify-center items-center w-full`}
        >
          <div className="max-w-[1200px] w-full">
            <Navbar />
            <div className="h-[64px] w-full"></div>
            {children}
          </div>
        </body>
      </DataProvider>
    </html>
  );
}
