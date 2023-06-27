import React from "react";
import "../styles/globals.css";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";

const newFont = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={newFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
