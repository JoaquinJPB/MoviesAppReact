//import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import styles from '../styles/Search.module.css'

function Search() {
    const [query, setQuery] = useSearchParams()
    const search = query.get('search')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search || ''}
                    placeholder='Título...'
                    aria-label='Search movies' 
                    onChange={ (e) => {
                        const value = e.target.value
                        setQuery({ search: value })
                    }} 
                />
                <FaSearch size={20} color='black' className={styles.searchButton}/>
            </div>
        </form>
    )
}

export default Search