"use client";
import React from "react";
import { FaUmbrellaBeach, FaHotel,FaCampground } from "react-icons/fa";
import { MdVilla} from "react-icons/Md";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

export const categories = [
  {
    name: "Tatil-Köyü",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Kamp",
    icon: FaCampground,
  },
  {
    name: "Otel",
    icon: FaHotel,
  },
  {
    name: "Villa",
    icon: MdVilla,
  },
];

const Categories = () => {
  const params =useSearchParams();
  const urlItem = params?.get('category')
  console.log(urlItem, 'urlItem')
  return (
    <div className="flex items-center gap-7">
      {categories.map((cat, i) => (
        <CategoriesItem 
        key={i}
        name={cat.name}
        icon={cat.icon}
        selected={urlItem == cat.name}/>
      ))}
    </div>
  );
};

export default Categories;
