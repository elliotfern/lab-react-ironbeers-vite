import axios from "axios"
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import ClockLoader from "react-spinners/ClockLoader";

function RandomBeersPage() {
    // creamos 1 estado para renderizar los detalles de la cerveza
    const [beerDetails, setBeerDetails] = useState(null)

    // estado para visualizar un gif conforme se está cargando la data
    const [isFetching, setIsFetching] = useState(true)

    // llamamos al hook de la url dinamica y de la redireccion
    const param = useParams();
    const navigate = useNavigate();

    // proceso de llamado a la API externa
    useEffect(() => {
        getData()
    }, [param.beerId])

    // funcion async await para recoger los datos de la cerveza
    const getData = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            console.log(response.data)
            setBeerDetails(response.data)
            setIsFetching(false)
        } catch (error) {
            console.log(error)
            navigate("/") //en caso de error, vamos a la homepage
        }
    }

    // mientras no se carga la API externa mostramos un efecto gif
    if (isFetching === true) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                <ClockLoader size={100} />
            </div>
        )
    }

    return (
        <div className="box-beer" key={beerDetails._id}>
            <div className="boox-beer-img"> <img src={beerDetails.image_url} height={500}></img>
            </div>

            <div class="box-beer-info">
                <div class="box-beer-sub">
                    <h2>{beerDetails.name}</h2>
                </div>
                <div class="box-beer-sub align-right">
                    <h2> {beerDetails.attenuation_level}</h2>
                </div>
            </div>

            <div class="box-beer-info">
                <div class="box-beer-sub">
                    <h4>{beerDetails.tagline}</h4>
                </div>
                <div class="box-beer-sub align-right">
                    <h5> {beerDetails.first_brewed}</h5>
                </div>
            </div>

            <p> {beerDetails.description}</p>
            <p><strong>{beerDetails.contributed_by}</strong></p>
        </div>
    )
}

export default RandomBeersPage;
