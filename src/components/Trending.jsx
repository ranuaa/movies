import React from 'react'
import '../style/kedua.css'
import ReactStars from 'react-stars'
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'

function Trending() {

  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(4);

  const lihatLebih = () => {
    setVisible((preValue) => preValue + 16);
  }


  useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/trending/all/day?`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY
        }
      }).then((response) => {
        setMovies(response.data.results)
      })


  }, [])


  return (
    <div>
      <div className='Heading'>
        <h1>Trending today</h1>
      </div>
      <div className='wrapper'>

    {movies.slice(0, visible).map((result, index) => {
      return (
        <div className='card' key={index}>
        <img src={`${process.env.REACT_APP_IMAGE_URL}/${result.poster_path}`} />
        <div className='descriptions'>
          <h6>{result.id}</h6>
            <h1>{result.title}</h1>
            <h6>
            <ReactStars
              count={5}
              half={true}
              value={result.vote_average / 2}
              size={24}
              edit={false}
              color2={'#ffd700'} />
            </h6>
            <p>{result.overview}l</p>
            <button>
                
            </button>
        </div>
    </div>
      )
    })}

      </div>
      <Button onClick={lihatLebih} className='lihatlebih '>See All <span>{'>'}</span></Button>
    </div>
  )
}

export default Trending