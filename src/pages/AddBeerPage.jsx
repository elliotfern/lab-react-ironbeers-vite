import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AddBeerPage() {

    // el hook para hacer la redireccion
    const navigate = useNavigate();

    // estados que controlan los elementos del formulario
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuation] = useState("")
    const [contributed_by, setcontributed] = useState("")

    // los handlers de cada input
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleTaglineChange = (event) => {
        setTagline(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleFirstBrewedChange = (event) => {
        setFirstBrewed(event.target.value)
    }

    const handleBrewersTipsChange = (event) => {
        setBrewersTips(event.target.value)
    }

    const handleAttenuationChange = (event) => {
        setAttenuation(event.target.value)
    }

    const handleContributedChange = (event) => {
        setcontributed(event.target.value)
    }

    // handle buton submit

    const handleCreateBeer = async (event) => {
        event.preventDefault()

        try {

            // API externa POST
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name: name,
                tagline: tagline,
                description: description,
                first_brewed: first_brewed,
                brewers_tips: brewers_tips,
                attenuation_level: attenuation_level,
                contributed_by: contributed_by
            })

            // 2. redireccionar al usuario una vez creada la nueva cerveza
            navigate("/beers")

        } catch (error) {
            console.log(error)
            navigate("/")
        }
    }

    return (
        <div className="formAdd">
            <h2>Add new beer</h2>
            <form>

                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={name} onChange={handleNameChange} />


                <label htmlFor="tagline"> Tagline:</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTaglineChange} />

                <label htmlFor="description"> Description:</label>
                <textarea name="description" value={description} onChange={handleDescriptionChange} >
                </textarea>

                <label htmlFor="first_brewed"> First Brewed:</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirstBrewedChange} />

                <label htmlFor="brewers_tips"> Brewed Tips:</label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={handleBrewersTipsChange} />

                <label htmlFor="attenuation_level"> Attenuation Level:</label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuationChange} />

                <label htmlFor="contributed"> Contributed By:</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributedChange} />

                <button type="submit" className="btn-round" onClick={handleCreateBeer}>ADD NEW</button>


            </form>
        </div>
    )


}
export default AddBeerPage;
