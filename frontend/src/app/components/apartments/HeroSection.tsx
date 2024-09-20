
"use client"

import Image from "next/image";

const HeroSection = ({
    title,
    description
}:
    {
        title: string,
        description: string
    }
) => {
    return (
        <div className="w-100" style={{ height: "80vh" }}>
            <div className="relative w-full h-full flex items-center">
                <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                <Image
                    alt="hero"
                    src={'/images/hero.webp'}
                    fill
                />
                <div className="px-8 md:px-24 w-full h-full flex justify-center z-10 flex-col gap-2">
                    <h1 className=" text-white font-bold text-7xl">{title}</h1>
                    <p className=" text-white">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;