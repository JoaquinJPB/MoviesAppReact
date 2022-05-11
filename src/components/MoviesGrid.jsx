import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import MovieCard from './MovieCard'
import Spinner from '../components/Spinner'
import styles from '../styles/MoviesGrid.module.css'


function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function MoviesGrid() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const query = useQuery()
    const search = query.get('search')

    console.log(search)

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search ? 'http://localhost:5000/api/movies?title=' + search : 'http://localhost:5000/api/movies/'
        fetch(searchUrl)
            .then(result => result.json())
            .then(data => {
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