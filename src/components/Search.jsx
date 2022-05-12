import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'

import useQuery from '../hooks/useQuery'
import styles from '../styles/Search.module.css'

function Search() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const query = useQuery()
    const search = query.get('search')

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search}
                    placeholder='Título...'
                    aria-label='Search movies' 
                    onChange={ (e) => {
                        const value = e.target.value
                        navigate('/?search='+ value)
                    }} 
                />
                <FaSearch size={20} color='black' className={styles.searchButton}/>
            </div>
        </form>
    )
}

export default Search