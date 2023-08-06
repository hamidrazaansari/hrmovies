import axios from 'axios'
import '../Trending/Trending.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PopularMovie(props) {
const [data , setData] = useState('')
const [filter , setiltr] =useState('popular')
const navigate = useNavigate()
useEffect(()=>{
  async function fetchData(){
    const response =await axios.get(`https://api.themoviedb.org/3/${props.type}/${filter}?api_key=7f46651666f1ca68e4cf0cb150551f07&language=en-IN&with_original_language=hi`)
    setData(response.data.results)
  }
  fetchData()
},[filter, props ])

const handleChange = (filter)=>{
  setiltr(filter)
}

  return (
    <div className='container mt-4'>
      <hr className='text-light' />
       <span className='text-light text-start fs-3 mx-4'>What's Popular </span>
      <div className='btns-container'>

       <button className='btn bttns btn-light mx-4' onClick={()=>{handleChange('popular')}}>Streaming</button>
       <button className='btn bttns btn-light ' onClick={()=>{handleChange('now_playing')}}>In_Theaters</button>
       <button className='btn bttns btn-light mx-4' onClick={()=>{handleChange('top_rated')}}>Top_Rated</button>
       </div>

       <div className='trending-row d-flex justify-content-center'>

        {
          data && data.map(item=>{
            return( 

              <div class="Moviecard mx-2 my-3" key={item.id} onClick={() => { navigate(`/movie/${item.id}`) }}>
              <img src={item.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}` : item.backdrop_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}` : "not.jpg"} class="moviecardImg" alt="..." />

              <h6 class="text-center  text-light">{item.original_title || item.original_name}</h6>
              <h6 class="text-center  text-light">{item.release_date}</h6>
            </div>
             )
          })
        }



   

       </div>



    </div>
  )
}

export default PopularMovie