import React, {useState, useEffect} from 'react';

import './App.css';
import Axios from 'axios';

const Nutrition = () =>  {
//   const [search, setSearch] = useState("");
//   const [nutrition, setNutrition] = useState([]);

  const API_ID = "0056cad8";
  const API_KEY = "71de52bde0697d02998c3bc4df962d56";

//   useEffect(async () => {
//     getNutrition();
//   },[]);

  const getNutrition = async () => {
      console.log("first")
    const res = await Axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${API_ID}&app_key=${API_KEY}`);
    console.log("res", res)
    // setNutrition(res.data.hits)
  }
  
//   const onInputChange = e => {
//         setSearch(e.target.value)
//       };

//       const onSearchClick = () => {
//         getNutrition();
//       }
  return (
    <div className="App">
      <h1 onClick={getNutrition}>Sanjay</h1>
    </div>
  );
}

export default Nutrition;
