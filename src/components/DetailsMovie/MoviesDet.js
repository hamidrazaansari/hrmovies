import axios from 'axios'
import './moviesDet.css'
import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'

function MoviesDet() {
    const [movie , setMovie] = useState('')

    const {id} = useParams()

    useEffect(()=>{
       async function fetchData(){
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7f46651666f1ca68e4cf0cb150551f07#&append_to_response=videos`)
          setMovie(response.data)
        }
        fetchData()

    },[id ])

    // console.log(movie)

    
    return (
        <>
            <img src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}` : movie.backdrop_path !== null ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` : "not.jpg"} class="background" alt="..." />

        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'  >
                <div className='col-6 Imgbox'>
                <img src={movie.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` : movie.backdrop_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}` : "not.jpg"} class="movieImg" alt="..." />
                </div>
                <div className='col-6 text-dark mt-5'>

                    <h1 className='fw-bolder fs-1'>{movie.title}({movie.release_date && movie.release_date.slice(0,4)})</h1>
                    <h5 className='fs-5' > <span className='fw-bold fs-3'>overview : </span> <br />{movie.overview}</h5>
                    <h5 className='fs-5'><span className='fw-bold fs-3' >TagLine : </span> <br /> {movie.tagline}</h5> 
                    <h4>{movie.status} : {movie.release_date}</h4>
                     <h4> language : { movie.spoken_languages && movie.spoken_languages[0].english_name}</h4>
                     <h4> popularity: {movie.popularity  }</h4>
                     <h4>User Score : {movie.vote_average && Math.floor(movie.vote_average * 10)} %</h4>
                     <a  href={movie.homepage} className='btn btn-dark' >Watch Now </a>
                </div>

            </div>


        </div>
        </>
    )
}

export default MoviesDet