import { useEffect, useState } from 'react'

import MovieCard from './MovieCard'
import Spinner from '../components/Spinner'
import styles from '../styles/MoviesGrid.module.css'

import get from '../utils/httpClient'
import Empty from './Empty'

function MoviesGrid( {search} ) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search ? 'https://myapimoviesjoaquin.herokuapp.com/api/movies?title=' + search : 'https://myapimoviesjoaquin.herokuapp.com/api/movies'
        get(searchUrl)
            .then((data) => {
                setMovies(data)
                setIsLoading(false)
            })
    }, [search])

    if(!isLoading && movies.length === 0){
        return <Empty />
    }

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