import axios from 'axios'
import React, { useEffect, useState } from 'react'


const baseURL="https://image.tmdb.org/t/p/original"
const Banner = (title,fetchUrl) => {
    const [movie,setMovie]=useState([])

    useEffect(() => {

        async function fetchData() {
    
          const request = await axios.get(fetchUrl);
          console.log(request)
          setMovie(
            request.data.results
          );
          // Math.floor(Math.random() * request.data.results.length -1)
          return request;
          
        }
        fetchData();
      }, [fetchUrl]);
      
   
  return (
    <div>
    
    </div>
  )
}

export default Banner
