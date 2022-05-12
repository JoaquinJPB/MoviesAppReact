import { useEffect, useState } from 'react'

import MovieCard from './MovieCard'
import Spinner from '../components/Spinner'
import styles from '../styles/MoviesGrid.module.css'

import get from '../utils/httpClient'

function MoviesGrid( {search}) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search ? 'http://localhost:5000/api/movies?title=' + search : 'http://localhost:5000/api/movies'
        get(searchUrl).
            then((data) => {
                setMovies(data)
                setIsLoading(false)
            })
    }, [search])

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