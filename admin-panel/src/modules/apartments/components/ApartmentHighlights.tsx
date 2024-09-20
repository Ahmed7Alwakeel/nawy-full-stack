import { IHighlight } from "../types/interfaces";

const ApartmentHighlights = ({ data }: { data: IHighlight[] }) => {

    return (
        <div className="apartment-highlight">
            <div className="cards-container">
                {data?.map((item: IHighlight, index: number) => (
                    <div className="card" key={index}>
                        <h6>{item.title}</h6>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApartmentHighlights;