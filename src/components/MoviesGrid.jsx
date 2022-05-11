import React, { useEffect, useState } from 'react'

import MovieCard from './MovieCard'
import Spinner from '../components/Spinner'
import styles from '../styles/MoviesGrid.module.css'

function MoviesGrid() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:5000/api/movies/all')
            .then(result => result.json())
            .then(data => {
                setMovies(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading){
        return <Spinner />
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
        </ul>
    )
}

export default MoviesGrid