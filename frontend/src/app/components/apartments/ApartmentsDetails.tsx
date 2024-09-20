import { IApartment } from "@/app/interfaces/interface";
import ApartmentSpec from "./ApartmentSpec";
import { useMemo } from "react";

const ApartmentsDetails = ({ apartmentData }: { apartmentData: IApartment }) => {
    const highlights = useMemo(() => {
        return [
            {
                label: "Area",
                value: apartmentData?.area,
            },

            {
                label: "Unit Name",
                value: apartmentData?.unitName,
            },
            {
                label: "Unit Number",
                value: apartmentData?.unitNumber,
            },
            {
                label: "Size (m²)",
                value: apartmentData?.size,
            },
            {
                label: "Bedrooms",
                value: apartmentData?.noOfBedrooms,
            },
            {
                label: "Bathrooms",
                value: apartmentData?.noOfBathrooms,
            },
            {
                label: "Price (EGP)",
                value: apartmentData?.price.toLocaleString('en-US', { minimumFractionDigits: 2 }),
            },
        ]

    }, [apartmentData])
    return (
        <div className="px-8 md:px-24 py-12">
            <h2 className="mb-8 text-4xl text-blue-950">Apartment Details</h2>
            <div className="flex gap-10 flex-col  md:grid md:grid-cols-4">
                {highlights?.map((item, index) => (
                    <ApartmentSpec
                        index={index}
                        key={index}
                        label={item.label}
                        value={item.value!}
                    />
                ))}
            </div>
        </div>
    );
}

export default ApartmentsDetails;