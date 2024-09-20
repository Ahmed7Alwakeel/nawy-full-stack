export const selectStyle = {
	menu: (provided: any, state: any) => ({
		...provided,
		color: "white",
		padding: "0",
		fontSize: "1rem",
		zIndex: "20",
	}),
	menuList: (provided: any, state: any) => ({
		...provided,
		padding: 0,
		maxHeight: "10rem",
		textTransform: "capitalize",
	}),
	control: (provided: any, state: any) => ({
		...provided,
		backgroundColor: "#fff",
		boxShadow: "none",
		borderRadius: "18px",
		transition: "1s all",
		zIndex: "1",
		cursor: "pointer",
		paddingInline: "1.5rem",
		fontSize: "1rem",
		borderColor: "#ddd",
		width: "100%",
		fontWeight: "500",
		overFlow: "hidden",
		minHeight: "4.25rem",
		"&:hover": {
			borderColor: "#ddd",
		},
	}),
	singleValue: (provided: any, state: any) => ({
		...provided,
		color: "#000",
		fontSize: "1rem",
		fontWeight: "500",
		textTransform: "capitalize",
	}),
	placeholder: (provided: any, state: any) => ({
		...provided,
		fontSize: ".9rem",
		fontWeight: "600",
		color: "#000",
		opacity: 0.5,
	}),
	dropdownIndicator: (provided: any, state: any) => ({
		...provided,
		color: "#000",
		transform: "scale(.9)",
	}),
	indicatorSeparator: (provided: any, state: any) => ({
		...provided,
		display: "none",
	}),
	valueContainer: (provided: any, state: any) => ({
		...provided,
		padding: "0",
		fontSize: "1rem",
		input: {
			padding: "0 !important",
			// display:'none'
		},
	}),
	option: (provided: any, state: any) => ({
		...provided,
		cursor: "pointer",
		fontSize: "1rem",
		fontWeight: "500",
		backgroundColor: state.isSelected
			? "#005cbb"
			: state.isFocused
			? "transparent"
			: "transparent",
		color: state.isSelected ? "fff" : "#000",
		opacity: state.isDisabled && ".5",
		textTransform: "capitalize",
		"&:hover": {
			backgroundColor: "#f4f4f4",
			color: "#000",
		},
	}),
}
