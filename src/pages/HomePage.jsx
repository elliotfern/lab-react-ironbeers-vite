import beersImg from "./../assets/beers.png"
import randomBeersImg from "./../assets/random-beer.png"
import newBeerImg from "./../assets/new-beer.png"
import {
    Link
} from "react-router-dom"
function HomePage() {

    return (
        <>
            <div className="card-homepage">
                <Link to={`/beers`}>
                    <img src={beersImg}></img>
                    <span><h2>All Beers</h2></span>
                </Link>
                <span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est totam quidem? Hic nobis numquam earum dignissimos voluptatem ratione totam, eos fugiat at nulla ipsam. Praesentium ab aspernatur ducimus officiis?</p></span>
            </div>

            <div className="card-homepage">
                <Link to={`/random-beer`}>
                    <img src={randomBeersImg}></img>
                    <span><h2>Random Beer</h2></span>
                </Link>
                <span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est totam quidem? Hic nobis numquam earum dignissimos voluptatem ratione totam, eos fugiat at nulla ipsam. Praesentium ab aspernatur ducimus officiis?</p></span>
            </div>

            <div className="card-homepage">
                <Link to={`/new-beer`}>
                    <img src={newBeerImg}></img>
                    <span><h2>New Beer</h2></span>
                </Link>
                <span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est totam quidem? Hic nobis numquam earum dignissimos voluptatem ratione totam, eos fugiat at nulla ipsam. Praesentium ab aspernatur ducimus officiis?</p></span>
            </div>
        </>
    )
}

export default HomePage