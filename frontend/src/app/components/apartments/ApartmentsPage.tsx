"use client"
import { IApartment, IResponse } from "@/app/interfaces/interface";
import HeroSection from "./HeroSection";
import Apartments from "./Apartments";
import { useEffect, useState } from "react";

const ApartmentsPage = ({ data }: { data: IResponse }) => {
    const [apartments, setApartments] = useState<IApartment[]>()
    useEffect(() => {
        data && setApartments(data.data)
    }, [data])
    return (
        <>
            <HeroSection
                title={"Find Your Home"}
                description={"Search & compare among 5000+ properties and 500+ compounds or list your property for sale"}
            />
            <Apartments apartments={apartments!} />
        </>
    );
}

export default ApartmentsPage;