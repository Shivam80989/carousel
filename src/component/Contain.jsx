"use client";
import React from "react";
import * as style from "../style/contain.module.css";
import Image from "next/image";
import img1 from "../app/images/img1.jpg";
import img2 from "../app/images/img2.jpg";
import img3 from "../app/images/img3.jpg";
import { useState } from "react";

const images = [
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",

  "https://images.hdqwalls.com/wallpapers/captain-marvel-comic-artwork-4k-eo.jpg",
];
export default function Contain() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div>
      <div className={style.main_container}>
        
        <div className={style.prev_btn} onClick={prevSlide}>
            <p className={style.p}>prev</p>
      
        
        </div>
        <div className="img">
            {images.map((item,index)=>
        current==index && (
            <div className={style.mainn_img}>
            <img className={style.main_img} key={index} src={item} alt="image"/>
        </div>
    ))}

        </div>
     <div className={style.nxt_btn} onClick={nextSlide}>
         <p className={style.p}>next</p>
          
        </div>
      </div>
    </div>
  );
}
