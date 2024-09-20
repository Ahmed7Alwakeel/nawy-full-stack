import { ErrorMessage, Field } from "formik";
import Select, { ActionMeta } from "react-select";
import { forwardRef } from "react";
import { IFieldWrapperProps } from "../../types/Interfaces";

const FieldWrapper = (
  {
    children,
    inputError,
    inputTouched,
    inputName,
    inputPlaceholder,
    options,
    input,
    onChange,
    select,
    selectStyle,
    type,
    noPadding,
    disabled,
    showUnit,
    unit,
    title,
    selectRef,
    value,
    defaultValue
  }: IFieldWrapperProps,
  ref: React.Ref<HTMLDivElement>
) => {

  return (
    <div
      className={`field_wrapper_container  
        ${noPadding && "no-padding"}
        `}
      ref={ref}
    >
      {title &&
        <div className={`header`}>
          <h5 className="title">
            {title}
          </h5>
        </div>
      }
      {input && (
        <div className="input_wrapper">
          <div className="field">
            <Field
              type={type || "text"}
              placeholder={inputPlaceholder}
              name={inputName}
              className={`input-field ${inputError && inputTouched && "input-error"
                }`}
              maxLength={50}
              disabled={disabled}
            />
            {showUnit && (
              <span className="fixed-place-holder">{unit}</span>
            )}
            <p className="error">
              <ErrorMessage name={inputName || "defaultName"} />
            </p>
          </div>
        </div>
      )}
      {select && (
        <div className="input_wrapper">
          <div className="field">
            <Select
              isSearchable={false}
              isClearable={false}
              isMulti={false}
              options={options}
              name={inputName}
              placeholder={inputPlaceholder}
              className={`select-drop-down ${inputError && inputTouched && "input-error"
                }  ${disabled && "disabled"}`}
              noOptionsMessage={() => `no options`}
              classNamePrefix="react-select"
              styles={selectStyle}
              onChange={onChange as ((newValue: unknown, actionMeta: ActionMeta<unknown>) => void)}
              isDisabled={disabled}
              ref={selectRef}
              value={value}
              defaultValue={defaultValue}
            />
            <p className="error">
              <ErrorMessage name={inputName || "defaultName"} />
            </p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default forwardRef(FieldWrapper);
