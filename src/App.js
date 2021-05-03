import React, {useState, useEffect} from 'react';

import './App.css';
import Header from './component/Header';
import Recipe from "./component/Recipe";
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);

  const API_ID = "5b1c3d0b";
  const API_KEY = "f0411c05d1d4fb4a76ca6ae818c645f5";

  useEffect(async () => {
    getRecipe();
  },[]);

  const getRecipe = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`);
    console.log("resss", res);
    setRecipe(res.data.hits)
  }
  
  const onInputChange = e => {
        setSearch(e.target.value)
      };

      const onSearchClick = () => {
        getRecipe();
      }
  return (
    <div className="App">
     
      <Header search={search} onSearchClick={onSearchClick} onInputChange={onInputChange}/>
      
      <div className="container">
      <Recipe recipe={recipe}/>
      </div>
    </div>
  );
}

export default App;
