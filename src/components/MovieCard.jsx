/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../styles/MovieCard.module.css'

function MovieCard({ movie }) {
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    return (
        <li className={styles.movieCard}>
            <img width={230} height={345} src={imgUrl} alt={movie.title} className={styles.movieImage} />
            <div>
                {movie.title}
            </div>
        </li>
    )
}

export default MovieCard