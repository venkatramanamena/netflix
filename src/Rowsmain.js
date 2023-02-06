import React from 'react'
import requests from './requests';
import Banner from './Banner';
import Row from './Row';
import './App.css'
const Rowsmain = () => {
  return (
    <div className='main'>
        <Banner itle="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
       <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Rowsmain
