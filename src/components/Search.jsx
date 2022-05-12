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
                    onChange={ (e) => {
                        const value = e.target.value
                        navigate('/?search='+ value)
                    }} 
                />
                <button className={styles.searchButton} type='submit'>
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

export default Search