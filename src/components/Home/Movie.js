import './Movie.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PopularMovie from '../PopularMovies/PopularMovie';
import Footer from '../Footer/Footer'
import Trending from '../Trending/Trending'
import FilterMovie from '../LanguageFilterMovies/FilterMovie';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [data , setData] = useState('')

  const Navigate = useNavigate()
useEffect(()=>{
  async function fetchData(){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7f46651666f1ca68e4cf0cb150551f07&language=en-IN&with_original_language=hi`)
    setData(response.data.results)
  }
  fetchData()
},[])
// console.log(data)
  return (
    <div className='App'>
      
    
      <div className='container  pt-5'>
      <div id="carouselExampleInterval  " className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        { data && data.map((slide, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner" >
        { data && data.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""} mb-5`} onClick={()=>{Navigate(`/movie/${slide.id}`)}}
          >
            <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${slide.poster_path}`} className="d-block bg-img" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption  d-md-block ">
              <h2 className='text-light'>{slide.title}</h2>
              <p>{slide.overview.slice(0, 180)}...</p>
              <h5> Language : {slide.original_language}ndi</h5>
              <h5>Release Date : {slide.release_date}</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <Trending type = {'movie'}/>
<PopularMovie type = {'movie'}/>
<FilterMovie type = {'movie'}/>


      </div>

<Footer />
    </div>
  )
}

export default Home

