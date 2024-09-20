
import { generalGet } from "@/app/utils/API";
import ApartmentsPage from "../components/apartments/ApartmentsPage";

export default async function Apartments() {
	const data = await generalGet("apartment")
	return (
		<>
			<ApartmentsPage data={data} />
		</>
	)
}
