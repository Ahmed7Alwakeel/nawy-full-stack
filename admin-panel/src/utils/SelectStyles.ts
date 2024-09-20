import { GroupBase, StylesConfig } from "react-select"
import { TOptions } from "../types/types"

export const selectStyles: StylesConfig<TOptions, false, GroupBase<TOptions>> = {
	menu: (provided, state) => ({
		...provided,
		backgroundColor: "#000",
		color: "#fff",
		padding: "0",
		zIndex: "2",
		borderRadius: "8px",
		overflow: "hidden",
		minWidth: "10rem",
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: 0,
		maxHeight: "13em",
	}),
	control: (provided, state) => ({
		...provided,
		boxShadow: "none",
		borderRadius: "8px",
		height: "2.85rem",
		width: "100%",
		minWidth: "12rem",
		transition: "1s all",
		zIndex: "1",
		cursor: "pointer",
		padding: "0 .75rem",
		borderColor: "#f0f0f0",
		fontSize: "0.75rem",
		"&:hover": {
			borderColor: "#e5e5e5",
		},
	}),
	singleValue: (provided, state) => ({
		...provided,
		color: state.isDisabled ? "rgba(0,0,0,0.7)" : "#000",
		fontSize: "0.75rem",
		margin: 0,
		overflow: "unset",
		"&:disabled": {
			color: "red",
			fontSize: "0.75rem",
		},
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: "#000",
		fontSize: ".75rem",
		width: "100%",
		textTransform: "capitalize",
		opacity: ".5",
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: state.isDisabled ? "rgba(0,0,0,0.7)" : "#000",
		padding: 0,
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: "none",
	}),
	valueContainer: (provided, state) => ({
		...provided,
		padding: "0",
		height: "100%",
		display: "flex",
		flexWrap: "nowrap",
	}),
	option: (provided, state) => ({
		...provided,
		cursor: "pointer",
		fontSize: "0.75rem",
		paddingInline: "0.75rem",
		backgroundColor:
			state.isFocused && !state.isSelected
				? "rgba(255, 255, 255, 0.3)"
				: state.isSelected
				? "#000"
				: "#fff",
		color: state.isSelected || state.isFocused ? "#fff" : "#000",
		"&:hover": {
			backgroundColor: !state.isSelected ? "rgba(255, 255, 255, 0.3)" : "",
			color: !state.isSelected ? "#fff" : "",
		},
	}),
	multiValueRemove: (provided, state) => ({
		...provided,
		transition: ".2s",
		"&:hover": {
			backgroundColor: "#000",
			color: "#fff",
		},
	}),
}
