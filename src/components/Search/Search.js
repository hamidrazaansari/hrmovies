import axios from 'axios'
import './Search.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [searchquery, setSearchquery] = useState('')
    const [data, setData] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&query=${searchquery}`)
            setData(resp.data.results)
        }
        fetchData()

    }, [searchquery])

function handeCancel(){
    setSearchquery('')
}
    
    return (
        <div>
            <form className="d-flex ">
                <input className="form-control  search-bar" value={searchquery} type="text" placeholder="Search" aria-label="Search" onChange={(e) => { setSearchquery(e.target.value) }} />
                <button className="btn  buttn" onClick={handeCancel}><i className="fa-solid fa-cancel"></i></button>
            </form>

            <div className='search-box'>
    {
         
         data &&   data.map((item, index) => (
                <div key={item.id}>
                    <p className='text-light  cursor-pointer' onClick={() => navigate(`/movie/${item.id}`)}>{item.title || item.name}</p>
                </div>
            ))
        
        
    }
</div>
        </div>
    )
}

export default Search