"use client";
import Image from "next/image";
import { useState } from "react";

export default function BookStack({
  image,
  title,
  author,
  coverwidth,
  spines,
  coverheight,
  className,
  backImage,
}: {
  image: string;
  spines: any[];
  title: string;
  author: string;
  coverwidth: number;
  coverheight: number;
  className?: string;
  backImage: string;
}) {
  const widthvh = (80 * coverwidth) / coverheight;
  const [showBack, setShowBack] = useState<boolean>(false);

  return (
    <div
      className={
        "hidden lg:flex h-full max-h-screen gap-1 w-max flex-nowrap " + className
      }
    >
      <div
        className={`h-[80vh] w-[${widthvh}vh] bg-contain flex relative aspect-[${coverheight}/${coverwidth}]`}
      >
        <div className="absolute z-50 border-r border-stone-200/20 w-[5%] h-[80vh] left-0" />
        <Image
          src={showBack ? backImage : image}
          alt={`${title} - ${author}`}
          width={coverwidth * 600}
          height={coverheight * 600}
          className={`z-0 min-h-[80vh] h-[80vh] max-h-[80vh] w-auto object-contain antialiased aspect-[${coverheight}/${coverwidth}]`}
        />
      </div>
      <div className="flex gap-1">
        {spines &&
          spines.map((spine, i) => (
            <Image
              key={i}
              src={spine[0]}
              alt={`${title} - ${author}`}
              height={coverheight * 600}
              width={(spine[1] as number) * 600}
              className={`z-0 min-h-[80vh] h-[80vh] max-h-[${(80 * spine[1]) / coverheight}vh] w-auto object-contain antialiased aspect-[${coverheight}/${spine[1]}]`}
              onMouseOver={() => {
                setShowBack(true);
              }}
              onMouseLeave={() => {
                setShowBack(false);
              }}
            />
          ))}
      </div>
    </div>
  );
}
