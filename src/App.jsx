import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import MovieDetails from './pages/MovieDetails'
import styles from './styles/App.module.css'

function App() {
    return (
        <Router>
            <div>
                <header>
                    <Link to='/'><h1 className={styles.title}>Movies</h1></Link>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/movies/:movieId" element={<MovieDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App