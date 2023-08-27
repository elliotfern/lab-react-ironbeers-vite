import homeIconImg from "./../assets/home-icon.png"
import {
    Link
} from "react-router-dom"

function Navbar() {
    return (
        <>
            <Link to={`/`}><img src={homeIconImg} alt="HomePage" /></Link>
        </>
    )

}

export default Navbar;
