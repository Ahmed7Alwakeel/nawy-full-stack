import { IApartment } from "@/app/interfaces/interface";
import Image from "next/image";
import Link from "next/link";

const ApartmentCard = ({ index, apartment }: { index: number, apartment: IApartment }) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden card-container" key={index}>
            <div className="relative w-full h-40">
                <Image
                    alt="hero"
                    src={'/images/hero.webp'}
                    fill
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{`${apartment?.unitName}, ${apartment.unitNumber}`}</h2>
                <p className="leading-none text-gray-700 text-base mb-4 h-12">
                    {apartment?.description}
                </p>
                <Link passHref href={`/apartments/${apartment._id}`} className="text-blue-500 hover:text-blue-700 font-semibold">Read more</Link>
            </div>
        </div>
    );
}

export default ApartmentCard;