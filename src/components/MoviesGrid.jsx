import React from 'react'
import movies from '../movies.json'
import MovieCard from './MovieCard'
import styles from '../styles/MoviesGrid.module.css'

function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </ul>
    )
}

export default MoviesGrid