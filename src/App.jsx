import Navbar from "./Components/Navbar";
import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, json } from "react-router-dom";
import Home from "./Components/Home";
import Saved from "./Components/Saved";
import PricingPlansPage from "./Components/PricingPlansPage";

function App() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("nature");
  const [Loader, setloader] = useState(true);
  const [saved, setSaved] = useState([]);

  const Api_Key = "CYAtmi0UxHpDYIjfXSPL3q17Cx1qFKCvjwjyiJjwJy1SK2aDEH9jtXjY";
  // const URL = "https://api.pexels.com/v1/search?query=nature&per_page=1";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: Api_Key,
          },
        }
      );
      setImage(res.data.photos);
      setloader(false);

      // ========loder=======
    };
    const data = JSON.parse(localStorage.getItem("image"));
    // if(data){
    //   setSaved(data)
    // }
    fetchImage();
  }, [search]);

  //======Local===storage==========
  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("image", json);
    }
  }, [saved]);

  // console.log('img is saved', saved)
  return (
    <>
      <Router>
        <Navbar setsearch={setSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                image={image}
                loaderprops={Loader}
                savedprops={saved}
                setSavedprops={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved savedprops={saved} loaderprops={Loader} />}
          />

          <Route path="/PricingPlansPage" element={<PricingPlansPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
