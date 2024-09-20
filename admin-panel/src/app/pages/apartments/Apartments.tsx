import { useDispatch } from "react-redux";
import { setBreadCrumbsData } from "../../../store/redux/breadCrumbsData";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { generalGet } from "../../../API/api";
import TableSkeleton from "../../../components/loaders/TableSkeleton";
import ListHeader from "../../../components/ListHeader";
import { authContext } from "../../../store/context/authContext";
import { IApartment } from "../../../modules/apartments/types/interfaces";
import ApartmentTableContainer from "../../../modules/apartments/components/ApartmentTableContainer";
import ApartmentsFilter from "./ApartmentsFilter";

const Apartments = () => {

    const { catchError } = useContext(authContext)
    const dispatch = useDispatch()
    dispatch(setBreadCrumbsData({
        links: [{ label: "Apartments", path: "/apartments" }],
        page_title: "Apartments",
    }))
    const [refetch, setRefetch] = useState<string | boolean>(false)
    const [shownList, setShownList] = useState<IApartment[]>([])
    const [apartmentsData, setApartmentsData] = useState<IApartment[]>([])
    const { data, isSuccess, isLoading, error } = useQuery({
        queryKey: ["apartment", refetch],
        queryFn: () => generalGet("/apartment?sort=price"),
        refetchOnWindowFocus: false
    });

    useEffect(() => {
        error && catchError(error)
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            const res = data?.data.data
            setApartmentsData(res)
        }
    }, [isSuccess, data])

    const tableHeaders = ["Area", "Unit Name", "Unit Number", "Size (m²)", "Bedrooms", "Bathrooms", "Price (EGP)", "Actions"
    ]

    if (isLoading) return <TableSkeleton columns={9} />

    return (
        <div>
            <ListHeader>
                <ApartmentsFilter data={apartmentsData} setShownList={setShownList} />
            </ListHeader>
            <ApartmentTableContainer
                tableHeaders={tableHeaders}
                data={shownList}
                noDataMessage={"No apartments found"}
                setRefetchData={setRefetch}
            />
        </div>
    );
}

export default Apartments;