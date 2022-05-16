import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Spinner from '../components/Spinner'
import styles from '../styles/MovieDetails.module.css'
import get from '../utils/httpClient'

function MovieDetails() {
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        get('https://myapimoviesjoaquin.herokuapp.com/api/movies'+movieId)
            .then(data => {
                setMovie(data)
                setIsLoading(false)
            })
    },[movieId])

    if (isLoading){
        return <Spinner />
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