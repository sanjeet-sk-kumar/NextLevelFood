"use client";
import React,{useEffect, useState} from 'react';
import BurgerImg from "@/assets/burger.jpg";
import PizzaImg from "@/assets/pizza.jpg";
import CurryImg from "@/assets/curry.jpg";
import DubmplingsImg from "@/assets/dumplings.jpg";
import MancheeseImg from "@/assets/macncheese.jpg";
import SchnitzelImg from "@/assets/schnitzel.jpg";
import TomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";
import Image from 'next/image';

const images =[
    {src: BurgerImg, alt: "A delicious burger"},
    {src: PizzaImg, alt: "A delicious pizza"},
    {src: CurryImg, alt: "A delicious spicy curry"},
    {src: DubmplingsImg, alt: "Steamed dumplings"},
    {src: MancheeseImg, alt: "Mac and cheese"},
    {src: SchnitzelImg, alt: "A delicious schnitzel"},
    {src: TomatoSaladImg, alt: "A delicious tomato salad"},
]

const ImageSlideShow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex(prev=> (prev+1)%images.length)
        },3000)

        return () => clearInterval(interval)
    },[])
  return (
    <div className={classes.slideshow}>
        {images.map((image, index) => (
            <Image 
                key={index}
                src={image.src}
                alt={image.alt}
                className={`${index === currentImageIndex ? classes.active : ""}`}
            />
        ))}
    </div>
  )
}

export default ImageSlideShow