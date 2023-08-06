import axios from 'axios'
import './Trending.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Trending(props) {
  const [data, setData] = useState()

  const [filter, setFiltr] = useState('day')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/${props.type}/${filter}?api_key=a65c90fbe309b74c7766f2d219475c78&language=en-IN&with_original_language=hi`)
      setData(response.data.results)
    }
    fetchData();
  }, [filter , props])



  const handleFilter = (filter) => {
    setFiltr(filter)

  }
  return (
    <div>
      <h1 className='text-center text-light'>{props.type}</h1>
      <hr className='text-light' />
      <span className='text-light mx-4 fs-3'>Trending</span>
<div className='btns-container'>
      <button className='btn bttns btn-light mx-4' onClick={() => { handleFilter('day') }}>Today</button>
      <button className='btn bttns btn-light ' onClick={() => { handleFilter('week') }}> This Week</button>
   </div>
      <div className='d-flex trending-row justify-content-center'>

        {
          data && data.map(item => {
            return (

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

export default Trending