import { Link  } from 'react-router-dom'
import styles from '../styles/MovieCard.module.css'

function MovieCard({ movie }) {
    return (
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie._id}>
                <img width={230} height={345} src={movie.img} alt={movie.title} className={styles.movieImage} />
                <div>
                    {movie.title}
                </div>
            </Link>
        </li>
    )
}

export default MovieCard