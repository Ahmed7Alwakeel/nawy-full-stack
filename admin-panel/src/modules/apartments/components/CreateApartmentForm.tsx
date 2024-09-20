import { IApartment } from "../types/interfaces";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/buttons/Button";
import { useContext, useRef, useState } from "react";
import FieldWrapper from "../../../components/formInputs/FieldWrapper";
import { selectStyles } from "../../../utils/SelectStyles";
import { areaOptions, unitNamesOptions, unitNumbersOptions } from "../../../config/FixedData";
import { generalPost, generalUpdate } from "../../../API/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../store/context/authContext";

const CreateApartmentForm = ({ data }: { data: IApartment }) => {
    const { catchError } = useContext(authContext)
    const unitNameRef = useRef<any>(null);
    const navigate = useNavigate();
    const unitNumberRef = useRef<any>(null);
    const [loading, setLoading] = useState(false)
    const validationSchema = Yup.object({
        description: Yup.string()
            .required("Required"),
        area: Yup.string()
            .required("Required"),
        unitName: Yup.string()
            .required("Required"),
        unitNumber: Yup.string()
            .required("Required"),
        size: Yup.number()
            .required("Required")
            .typeError("Must be a number")
            .min(0, 'Must be greater than or equal 0'),
        noOfBathrooms: Yup.number()
            .required("Required")
            .typeError("Must be a number")
            .min(0, 'Must be greater than or equal 0'),
        noOfBedrooms: Yup.number()
            .required("Required")
            .typeError("Must be a number")
            .min(0, 'Must be greater than or equal 0'),
        price: Yup.number()
            .required("Required")
            .typeError("Must be a number")
            .min(0, 'Must be greater than or equal 0'),
    });

    const initialValues = data || {
        area: "",
        unitName: "",
        unitNumber: "",
        size: "",
        noOfBathrooms: "",
        noOfBedrooms: "",
        price: "",
        description: "",
    }

    return (

        <div style={{ scrollMarginTop: "12rem" }}>
            <Formik
                enableReinitialize
                validateOnMount
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values) => {
                    setLoading(true)
                    data ?
                        generalUpdate({ route: `/apartment/${data._id}`, values }).then(res => {
                            toast.success("Apartment created successfully")
                            navigate("/")
                        }).catch(err => {
                            catchError(err, setLoading)
                        })
                        : generalPost({ route: "/apartment", values }).then(res => {
                            toast.success("Apartment created successfully")
                            navigate("/")
                        }).catch(err => {
                            catchError(err, setLoading)
                        })
                }}
            >
                {(formik) => (
                    <>
                        <Form >
                            <div className="inputs_group">
                                <FieldWrapper
                                    title="Description"
                                    inputName="description"
                                    inputError={formik?.errors?.description as string}
                                    inputTouched={formik?.touched?.description as boolean}
                                    inputPlaceholder={`Ex: description`}
                                    input
                                />
                                <FieldWrapper noPadding />
                            </div>
                            <div className="inputs_group">
                                <FieldWrapper
                                    title={"Area"}
                                    inputPlaceholder={"Select area"}
                                    inputName={`area`}
                                    options={areaOptions}
                                    onChange={(e) => {
                                        if (unitNumberRef || unitNameRef) {
                                            unitNameRef?.current?.clearValue()
                                            unitNumberRef?.current?.clearValue()
                                        }
                                        formik.setFieldValue("area", e?.value)
                                    }}
                                    selectStyle={selectStyles}
                                    select
                                    defaultValue={areaOptions?.find(option => option.value == data?.area)}
                                    key={areaOptions?.find(option => option.value == data?.area)?.value}


                                />
                                <FieldWrapper
                                    title={"unit name"}
                                    inputPlaceholder={"Select unit name "}
                                    inputName={`unitName`}
                                    options={unitNamesOptions}
                                    onChange={(e) => {
                                        if (formik.values.area)
                                            if (unitNumberRef) {
                                                unitNumberRef?.current?.clearValue()
                                            }
                                        formik.setFieldValue("unitName", e?.value)
                                    }}
                                    selectStyle={selectStyles}
                                    select
                                    selectRef={unitNameRef}
                                    disabled={!formik.values.area}
                                    defaultValue={unitNamesOptions?.find(option => option.value == data?.unitName)}
                                    key={unitNamesOptions?.find(option => option.value == data?.unitName)?.value}
                                />
                                <FieldWrapper
                                    title={"unit number"}
                                    inputPlaceholder={"Select unit number "}
                                    inputName={`unitNumber`}
                                    options={unitNumbersOptions}
                                    onChange={(e) => {
                                        formik.values.unitName && formik.setFieldValue("unitNumber", e?.value)
                                    }}
                                    selectStyle={selectStyles}
                                    select
                                    selectRef={unitNumberRef}
                                    disabled={!formik.values.unitName}
                                    defaultValue={unitNumbersOptions?.find(option => option.value == data?.unitNumber)}
                                    key={unitNumbersOptions?.find(option => option.value == data?.unitNumber)?.value}
                                />
                            </div>
                            <div className="inputs_group">
                                <FieldWrapper
                                    title="Size"
                                    inputName="size"
                                    inputError={formik?.errors?.size as string}
                                    inputTouched={formik?.touched?.size as boolean}
                                    inputPlaceholder={`Ex: 150`}
                                    input
                                    showUnit
                                    unit="M²"
                                />
                                <FieldWrapper
                                    title="No Of Bedrooms"
                                    inputName="noOfBedrooms"
                                    inputError={formik?.errors?.noOfBedrooms as string}
                                    inputTouched={formik?.touched?.noOfBedrooms as boolean}
                                    inputPlaceholder={`Ex: 3`}
                                    input
                                />
                                <FieldWrapper
                                    title="No Of Bathrooms"
                                    inputName="noOfBathrooms"
                                    inputError={formik?.errors?.noOfBathrooms as string}
                                    inputTouched={formik?.touched?.noOfBathrooms as boolean}
                                    inputPlaceholder={`Ex: 2`}
                                    input
                                />
                            </div>
                            <div className="inputs_group">
                                <FieldWrapper
                                    title="Price"
                                    inputName="price"
                                    inputError={formik?.errors?.price as string}
                                    inputTouched={formik?.touched?.price as boolean}
                                    inputPlaceholder={`Ex: 100000`}
                                    showUnit
                                    unit="EGP"
                                    input
                                    noPadding
                                />
                                <FieldWrapper noPadding />
                                <FieldWrapper noPadding />
                            </div>
                            <div className="form_button reverse">
                                <Button
                                    loading={loading}
                                    disabled={loading || !formik.isValid}
                                    text={`Submit`}
                                    type={'submit'}
                                />
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default CreateApartmentForm;