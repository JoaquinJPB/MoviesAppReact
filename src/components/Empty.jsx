import styles from '../styles/Empty.module.css'

function Empty() {
    return (
        <div className={styles.emptyContainer}>
            <h2>
                Búsqueda no encontrada
            </h2>
        </div>
    )
}

export default Empty