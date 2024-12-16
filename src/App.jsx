import { Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SemanticMain } from "./components/SemanticMain";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details/Details";
import { NotFound } from "./pages/NotFound";
import { ALL_COUNTRIES } from "./config";
import axios from "axios";


function App() {

  const [countries, setCountries] = useState([]);

 
  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
  },[countries.length]);

 return(
    <>
    <Header  />
    <SemanticMain>
      <Routes>
        <Route path="/" element={<HomePage countries = {countries} setCountries={setCountries}/>}/>
        <Route path="/country/:name" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </SemanticMain>
    </>
 
 )
}

export default App
