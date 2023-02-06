import React, { useState } from 'react'
import './Row.css'
import axios from './axios';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL="https://image.tmdb.org/t/p/original"
const Row = ({ title, fetchUrl,isLarge}) => {
  const [movies,setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
      
        //if [] then run only once when the row loads
        //if [variable] then run when row loads and run when variable value changes
        async function fetchData() {
          //it take some time in fetching from tmdb
          //axios gives instance and remaining from prop fetchUrl passed from Row
          const request = await axios.get(fetchUrl);
          console.log(request)
          setMovies(request.data.results)
          
          return request;
          
        }
       
        fetchData();
        
      }, [fetchUrl]);
      const opts={
        width:'100%',
        height:'380px',
        playerVars:{
          autoplay:1
        },
      }
      const handle=(movie)=>{
        if (trailerUrl) {
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.title || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
      }

  return (
   
    <div >
      
      <h3 style={{margin:'5px',color:'white'}}>{title}</h3>
     <div className='movies_row'>
     {
        movies.map(movie=>{
          return(
            <img key={movie.id} onClick={()=>handle(movie)} className={`row_poster ${isLarge && "row_posterLarge"}`} src={`${baseURL}${isLarge?movie.poster_path:movie.backdrop_path}` } alt={movie.name}></img>
          )
        })
      }
     </div>
      
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
