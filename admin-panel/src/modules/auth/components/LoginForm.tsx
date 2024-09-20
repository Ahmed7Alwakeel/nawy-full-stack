import Cookies from 'js-cookie'
import FieldWrapper from "../../../components/formInputs/FieldWrapper";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import TextContainer from './TextContainer';
import { IUserData } from '../types/Interfaces';
import { useDispatch } from 'react-redux';
import { setUserData, setUserToken } from '../store/redux/authData';
import { useTranslation } from 'react-i18next';
import { generalPost } from '../../../API/api';



const LoginForm = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const updateToken = (token: string) => {
        dispatch(setUserToken(token));
    };

    const updateUserData = (data: IUserData) => {
        dispatch(setUserData(data));
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Enter valid email format')
            .required('required')
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please remove spaces'),
        password: Yup.string().required('required')
            .matches(/^[^ ]\S*/, "Please remove spaces").min(3, "The password must be at least 3 characters."),
    });

    return (
        <div className="login_form" >
            <TextContainer
                title={"Login"}
                desc={"Welcome to Nawy admin"}
            />
            <Formik validateOnMount
                validationSchema={validationSchema}
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    setLoading(true)
                    generalPost({ route: "/auth/login", values: values }).then((res) => {
                        setLoading(false)
                        if (res.data.user.role !== "admin") {
                            toast.error("Unauthorized")
                            return
                        }
                        updateToken(res?.data?.token);
                        updateUserData(res?.data?.user);
                        Cookies.set('token', res?.data?.token);
                        res?.data?.user && localStorage.setItem('user_data', JSON.stringify(res?.data?.user));
                        navigate('/');
                    }).catch(err => {
                        toast.error(err.response.data.message)
                        setLoading(false)
                    })

                }}
            >
                {(formik) => (
                    <>
                        <Form>
                            <FieldWrapper
                                inputName={"email"}
                                inputPlaceholder={t("Email")}
                                inputError={formik.errors.email}
                                inputTouched={formik.touched.email}
                                input
                            />
                            <FieldWrapper
                                inputName={"password"}
                                inputPlaceholder={t("Password")}
                                inputError={formik.errors.password}
                                inputTouched={formik.touched.password}
                                input
                                type={'password'}
                            />
                            <div className="form_button double">
                                <Button loading={loading}>
                                    <span className="bold">{t("login")}</span>
                                </Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div >
    );
}

export default LoginForm;