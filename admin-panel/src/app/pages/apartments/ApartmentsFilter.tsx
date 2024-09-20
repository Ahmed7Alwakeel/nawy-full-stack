import { useEffect, useRef, useState, useTransition } from "react";
import SearchInputField from "../../../components/SearchInputField";
import { IApartment } from "../../../modules/apartments/types/interfaces";
import { selectStyles } from "../../../utils/SelectStyles";
import Select from "react-select";
import { TOptions } from "../../../types/types";
import { searchFilterLogic } from "../../../utils/HelperFunctions";

interface IProps {
    data: IApartment[]
    setShownList: React.Dispatch<React.SetStateAction<IApartment[]>>
}
const ApartmentsFilter = ({ data, setShownList }: IProps) => {
    const [searchInput, setSearchInput] = useState("")
    const [unitNamesOptions, setUnitNamesOptions] = useState<TOptions[]>()
    const [unitNumbersOptions, setUnitNumbersOptions] = useState<TOptions[]>()
    const [selectedName, setSelectedName] = useState<string>()
    const numbersRef = useRef<Select | any>(null)
    const namesRef = useRef<Select | any>(null)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        const nameOptions: TOptions[] = Array.from(
            new Map<string, TOptions>(
                data.map((item: IApartment) => [
                    item.unitName,
                    { label: item.unitName, value: item.unitName }
                ])
            ).values()
        );
        setUnitNamesOptions([{ label: "All", value: "" }, ...nameOptions])
    }, [data])

    useEffect(() => {
        const filteredData = data.filter(item => item.unitName == selectedName)
        const numbersOptions: TOptions[] = Array.from(
            new Map<string, TOptions>(
                filteredData.map((item: IApartment) => [
                    item.unitNumber,
                    { label: item.unitNumber, value: item.unitNumber }
                ])
            ).values()
        );
        setUnitNumbersOptions([...numbersOptions])
    }, [data, selectedName])

    useEffect(() => {
        setSelectedName(undefined)
        numbersRef?.current?.clearValue()
        namesRef?.current?.clearValue()
        setShownList(data)
        if (searchInput) {
            const results = searchFilterLogic({ searchInput, listOfData: data, keys: ["id", "area"] });
            startTransition(() => {
                setShownList(results)
            })
        }
    }, [data, searchInput])

    const applyFilter = (e: any) => {
        setShownList(data)
        if (e?.value) {
            const results = searchFilterLogic({ searchInput: e?.value, listOfData: data, keys: ["unitName", "unitNumber"] });
            setShownList(results)
        }
    }

    return (
        <div className="filter_container">
            <SearchInputField placeholder={"Search by Area"} setSearchInput={setSearchInput} searchInput={searchInput} />
            <Select
                placeholder={"Filter by Unit Name"}
                isSearchable={false}
                isClearable={false}
                isMulti={false}
                options={unitNamesOptions}
                className={`select-drop-down`}
                classNamePrefix="react-select"
                styles={selectStyles}
                onChange={(e: any) => {
                    numbersRef?.current?.clearValue()
                    applyFilter(e)
                    setSelectedName(e?.value)
                }}
                ref={namesRef}
            />
            <Select
                isDisabled={!selectedName}
                placeholder={"Filter by Unit Number"}
                isSearchable={false}
                isClearable={false}
                isMulti={false}
                options={unitNumbersOptions}
                className={`select-drop-down`}
                classNamePrefix="react-select"
                styles={selectStyles}
                onChange={applyFilter}
                ref={numbersRef}
            />
        </div>
    );
}

export default ApartmentsFilter;