"use client"
import { IApartment, ISingleResponse } from "@/app/interfaces/interface";
import HeroSection from "./HeroSection";
import { useEffect, useState } from "react";
import ApartmentsDetails from "./ApartmentsDetails";

const SingleApartmentPage = ({ data }: { data: ISingleResponse }) => {
    const [apartmentData, setApartmentData] = useState<IApartment>()
    useEffect(() => {
        data && setApartmentData(data.data)
    }, [data])
    return (
        <>
            <HeroSection
                title={`${apartmentData?.unitName}, ${apartmentData?.unitNumber}`}
                description={apartmentData?.description!}
            />
            <ApartmentsDetails apartmentData={apartmentData!} />
        </>
    );
}

export default SingleApartmentPage;