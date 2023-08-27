import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>

      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<AllBeersPage />} />
            <Route path="/random-beer" element={<RandomBeerPage />} />
            <Route path="/new-beer" element={<AddBeerPage />} />
            <Route path="/beers/:beerId" element={<BeerDetailsPage />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;