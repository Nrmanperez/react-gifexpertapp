// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/GetGifs";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrids = ({category}) => {

    // const [images, setImages] = useState([]);
    const { loading, data } = useFetchGifs(category);

    // useEffect( () => {
    //     getGifs(category).then( imgs => setImages( imgs ) )
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }

            <div className="card-grid">
                
                { data.map( (img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))}
                
            </div>
            
        </>
    )
}

export default GifGrids
