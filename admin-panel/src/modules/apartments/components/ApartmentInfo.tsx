import Button from "../../../components/buttons/Button"
import { useNavigate } from "react-router-dom"

interface Props {
    title: string
    data: {
        key: string
        value: string,
        hasLogo?: string
    }[]
    , id?: {
        route: string, text: string
    }
}
const ApartmentInfo = ({ title, data, id }: Props) => {

    const navigate = useNavigate()

    return (
        <div className={`data-info`}>
            <div className={`d-space ${id && "margin"}`}>
                <h2>{title}</h2>
                {id && <Button text={id.text} onClick={() => navigate(id.route)} />}
            </div>
            <div className="cards-container">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <h6>{item.key}</h6>
                        {item.hasLogo ?
                            <div className="logo">
                                {item.hasLogo && <img src={item.hasLogo} alt="" />}
                                <p>{item.value}</p>
                            </div> :
                            <p>{item.value}</p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ApartmentInfo;