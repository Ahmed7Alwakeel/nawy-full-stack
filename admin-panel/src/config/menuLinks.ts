import { apartments, createIcon, listIcon } from "./variables"

export const menuLinks = {
	header: "Apartments",
	baseRoute: "/apartments",
	headerIcon: [apartments],
	nestedLinks: [
		{
			label: "Apartments List",
			link: "/apartments",
			icon: [listIcon],
		},
		{
			label: "Create Apartment",
			link: "/apartments/create-apartment",
			icon: [createIcon],
		},
	],
}
