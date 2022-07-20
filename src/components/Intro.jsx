import React from 'react'
import {Row, Col, Container, Button,Carousel} from 'react-bootstrap'
import axios from 'axios';
import {useEffect, useState} from 'react'
import '../style/pertama.css'
import ReactStars from 'react-stars'

const Intro = () => {


  const [movies, setMovies] = useState([]);


  useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY
        }
      }).then((response) => {
        setMovies(response.data.results)
      })


  }, [])



  return (
      <div className='banner'>
      <Carousel className='slider-boss'>
        {movies.map((result, index) => {
         return (
          <Carousel.Item className='isi-slider' key={index}>
            <div className='overlay'></div>
          <img
          className='gambar-slider'
            src={`${process.env.REACT_APP_IMAGE_URL}/${result.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="rating">
              <ReactStars
              count={5}
              half={true}
              value={result.vote_average / 2}
              size={24}
              edit={false}
              color2={'#ffd700'} />
               </p>
            <h1 className=''>{result.title}</h1>
            <p className='deskripsi'>{result.overview}</p>
            <Button className='lanjut'><strong>Watch Now</strong></Button>
          </Carousel.Caption>
        </Carousel.Item>
         )
        })}
      </Carousel>
  </div>

  )
}

export default Intro

    