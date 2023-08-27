import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import {
    Link
} from "react-router-dom"

function AllBeersPage() {
    // estados para controlar la visualizacion de la lista de cervezas
    const [allBeers, setAllBeers] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    // Hook para la redireccion en caso de error
    const navigate = useNavigate();

    // useEffect para llamar a la API externa
    useEffect(() => {
        getData()
    }, [])

    // funcion para hacer una llamada aync await a la API externa
    const getData = async () => {
        try {
            const respuesta = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log("la llamada a la api externa devuelve: ", respuesta.data)
            setAllBeers(respuesta.data);
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
        <>
            {allBeers.map((eachBeer) => {
                return (
                    <div className="box-beer-list" key={eachBeer._id}>
                        <div className="box-beer-sub small-div">
                            <Link to={`/beers/${eachBeer._id}`}>
                                <img src={eachBeer.image_url} height={250} width={100}></img>
                            </Link>
                        </div>
                        <div className="box-beer-sub">
                            <Link to={`/beers/${eachBeer._id}`}><h2>{eachBeer.name}</h2></Link>
                            <h4>{eachBeer.tagline}</h4>
                            <p><strong>Created by: </strong>{eachBeer.contributed_by}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AllBeersPage;