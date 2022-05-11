import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from '../styles/MovieDetails.module.css'

function MovieDetails() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/movies/'+movieId)
            .then(result => result.json())
            .then(data => {
                setMovie(data)
            })
    },[movieId])

    if (!movie) {
        return null
    }

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={movie.img} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p><strong>Título:</strong> {movie.title}</p>
                <p><strong>Fecha de estreno:</strong> {movie.release}</p>
                <p><strong>Director:</strong> {movie.director}</p>
            </div>
        </div>
    )
}

export default MovieDetails