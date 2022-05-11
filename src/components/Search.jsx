import styles from '../styles/Search.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'

function Search() {
    const [searchText, setSeachText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/?search='+ searchText)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={searchText} 
                    onChange={ (e) => setSeachText(e.target.value)} 
                />
                <button className={styles.searchButton} type='submit'>
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

export default Search