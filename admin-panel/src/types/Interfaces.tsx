import {  ReactNode,FormEvent } from "react";
import { TOptions } from "./types";
import Select from "react-select/dist/declarations/src/Select";
import { ActionMeta } from "react-select";


export interface ITableSkeleton {
    columns: number
}
//Buttons
export interface IButtonProps {
    text?: string;
    customClass?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    disabled?: boolean;
    noScroll?: boolean;
    loading?: boolean;
    children?: ReactNode;
}

//Input Fields
export interface IFieldWrapperProps {
    children?: ReactNode;
    inputError?: string;
    inputTouched?: boolean;
    inputName?: string;
    inputPlaceholder?: string;
    options?: Array<TOptions>;
    input?: boolean;
    onChange?: ((newValue: { label: string, value: string } | undefined, actionMeta: ActionMeta<unknown>) => void) | undefined;
    select?: boolean;
    selectStyle?: object;
    type?: string;
    noPadding?: boolean;
    disabled?: boolean;
    showUnit?: boolean;
    unit?: string;
    title?: string;
    selectRef?: React.RefObject<Select> | null;
    value?: string
    defaultValue?: TOptions;

}

export interface IMultiDatePickerFieldProps {
    name: string
    label?: string
    onChange?: (e: FormEvent) => void
    value?: string
    minDate?: string
    maxDate?: string
    disabled?: boolean
    dateFormat?: string
}

export interface ITextEditorFieldProps {
    name: string
    className?: string
}

export interface ITimePickerFieldProps {
    name: string
    disabled?: boolean
}

export interface IAdminDataDropDown {
    dropDownToggler: boolean
}
interface IMenuLinks {
    header: string,
    headerIcon: JSX.Element[],
    baseRoute: string
    nestedLinks:
    {
        label: string,
        link: string,
        icon: JSX.Element[],
    }[]
}
export interface ITogglerNavLink {
    links: IMenuLinks,
    reAnimate?: boolean,
    customClass?: string,
    setMenu?: (e: boolean) => void
    keyName?: string
}