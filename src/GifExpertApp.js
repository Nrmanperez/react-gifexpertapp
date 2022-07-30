import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrids from "./components/GifGrids";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
      <>
        <h2>Ingresa el nombre del Gif</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
           { 
              categories.map( category => (
                <GifGrids
                  key={category}
                  category={category} 
                />
              ))
           }
        </ol>
      </>
    )
  }
  
  export default GifExpertApp