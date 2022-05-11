import React, { useEffect, useState } from 'react'
//import movies from '../movies.json'
import MovieCard from './MovieCard'
import styles from '../styles/MoviesGrid.module.css'

function MoviesGrid() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/movies/all')
            .then(result => result.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
        </ul>
    )
}

export default MoviesGrid