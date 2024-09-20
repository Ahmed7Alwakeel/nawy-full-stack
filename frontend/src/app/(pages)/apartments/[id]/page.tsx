
import SingleApartmentPage from "@/app/components/apartments/SingleApartmentPage";
import { generalGet } from "@/app/utils/API";

export default async function Home({ params }: { params: { id: string } }) {
	const data = await generalGet(`apartment/${params.id}`)
	return (
		<>
			<SingleApartmentPage data={data} />
		</>
	)
}
