import { useDispatch } from "react-redux";
import BasicInfoSkeleton from "../../../components/loaders/BasicInfoSkeleton";
import { setBreadCrumbsData } from "../../../store/redux/breadCrumbsData";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApartmentHighlights from "../../../modules/apartments/components/ApartmentHighlights";
import { generalGet } from "../../../API/api";
import { useQuery } from "@tanstack/react-query";
import { IApartment } from "../../../modules/apartments/types/interfaces";
import ListHeader from "../../../components/ListHeader";
import Button from "../../../components/buttons/Button";


const ApartmentDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [apartmentData, setApartmentData] = useState<IApartment>()
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["Apartment Details", id],
        queryFn: () => generalGet(`/apartment/${id}`),
        refetchOnWindowFocus: false
    });

    useEffect(() => {

        dispatch(setBreadCrumbsData({
            links: [
                { label: "Apartments", path: "/apartments" },
                { label: id, path: `/apartments/${id}` }
            ],
            page_title: "Apartment Details",
        }))

    }, [id])


    useEffect(() => {

        isSuccess && setApartmentData(data.data.data)

    }, [isSuccess, data])

    const highlights = useMemo(() => {
        return [
            {
                title: "Area",
                value: apartmentData?.area,
            },

            {
                title: "Unit Name",
                value: apartmentData?.unitName,
            },
            {
                title: "Unit Number",
                value: apartmentData?.unitNumber,
            },
            {
                title: "Size (m²)",
                value: apartmentData?.size,
            },
            {
                title: "Bedrooms",
                value: apartmentData?.noOfBedrooms,
            },
            {
                title: "Bathrooms",
                value: apartmentData?.noOfBathrooms,
            },
            {
                title: "Price (EGP)",
                value: apartmentData?.price.toLocaleString('en-US', { minimumFractionDigits: 2 }),
            },
        ]

    }, [apartmentData])


    if (isLoading) return <BasicInfoSkeleton />

    return (
        <div className="page_content details_page">
            <ListHeader customClass="row">
                <h2>Basic Info</h2>
                <Button text={"Edit apartment"} onClick={() => navigate(`/apartments/create-apartment/${id}`)} />

            </ListHeader>
            <ApartmentHighlights data={highlights} />
        </div>
    );
}
export default ApartmentDetails