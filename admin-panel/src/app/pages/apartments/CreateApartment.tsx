import { useDispatch } from "react-redux";
import { setBreadCrumbsData } from "../../../store/redux/breadCrumbsData";
import CreateApartmentForm from "../../../modules/apartments/components/CreateApartmentForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IApartment } from "../../../modules/apartments/types/interfaces";
import { useEffect, useState } from "react";
import { generalGet } from "../../../API/api";
import FormSkeleton from "../../../components/loaders/FormSkeleton";

const CreateApartment = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [apartmentData, setApartmentData] = useState<IApartment | null>()
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["Apartment Details", id],
        queryFn: () => generalGet(`/apartment/${id}`),
        refetchOnWindowFocus: false,
        enabled: !!id
    });

    dispatch(setBreadCrumbsData({
        links: [
            { label: "Apartments", path: "/apartments" },
            { label: "Create Apartment", path: "/create-apartment" }
        ],
        page_title: "Create Apartments",
    }))

    useEffect(() => {
        if (isSuccess) {
            setApartmentData(data?.data.data)
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (!id) {
            setApartmentData(null)
        }
    }, [id])


    if (isLoading) return <FormSkeleton />

    return (
        <div>
            <CreateApartmentForm data={apartmentData!} />
        </div>
    );
}

export default CreateApartment;