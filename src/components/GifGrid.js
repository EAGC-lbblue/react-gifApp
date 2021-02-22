import React, {/*  useEffect, useState  */} from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading} = useFecthGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__pulse">{category}</h3>

            {loading && <p className="animate__animated animate__heartBeat">Cargando...</p>}
            
            <div className="card-grid">
                {
                    images.map(img =>( 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
