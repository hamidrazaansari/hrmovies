import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FilterMovie(props) {

    const [data , setData] = useState()
    const [filterLanguage , setFiltrLanguage] = useState('hi')
    const navigate = useNavigate()

    useEffect(()=>{
       async function fetchData(){
        const resp = await axios.get(`https://api.themoviedb.org/3/discover/${props.type}?api_key=7f46651666f1ca68e4cf0cb150551f07&language=en-IN&with_original_language=${filterLanguage}`)
        setData(resp.data.results)
       }
       fetchData();
    },[filterLanguage , props])

    function handleFilter(filter){
        setFiltrLanguage(filter)
    }
  return (
    <div>

        <hr className='text-light'/>
        <span className='text-light mx-4 fs-3'>Language-Based Movie</span>
        <div className='btns-container'>
      <button className='btn bttns btn-light mx-4 ' onClick={() => { handleFilter('hi') }}>Hindi</button>
      <button className='btn bttns btn-light ' onClick={() => { handleFilter('ta') }}> Tamil</button>
      <button className='btn bttns btn-light mx-4 ' onClick={() => { handleFilter('te') }}> Telgu</button>
      <button className='btn bttns btn-light ' onClick={() => { handleFilter('mr') }}> marathi</button>
      <button className='btn bttns btn-light mx-4' onClick={() => { handleFilter('pa') }}> punjabi</button>
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

export default FilterMovie