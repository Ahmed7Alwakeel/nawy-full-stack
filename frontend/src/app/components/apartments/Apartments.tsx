"use client"

import { IApartment } from "@/app/interfaces/interface";
import ApartmentCard from "./ApartmentCard";

const Apartments = ({ apartments }: { apartments: IApartment[] }) => {
    console.log(apartments)
    return (
        <div className="px-8 md:px-24 py-12">
            <h2 className="mb-8 text-4xl text-blue-950">Apartments</h2>
            {apartments?.length > 0 ? <div className="flex gap-10 flex-col  md:grid md:grid-cols-3">
                {apartments?.map((apartment, index) => (
                    <ApartmentCard
                        key={index}
                        index={index}
                        apartment={apartment}
                    />

                ))}
            </div>
                :
                <p className="w-full text-xl text-center">No Apartments yet</p>}
        </div>
    );
}

export default Apartments;