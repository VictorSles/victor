import styles from '../CSS/Fragments.module.css'
function Fragments() {
    return (
        <>
            <h1>Meu Primero Fragment</h1>
            <ul className={styles.myUl}>
                <li className={styles.myil}>Teste 1</li>
                <li className={styles.myil}>Teste 2</li>
                <li className={styles.myil}>Teste 3</li>
            </ul>
        </>
    )
}
export default Fragments

{/* Os fragments são as Tags '<> </>' vazias, que fazem o papel de 'pai' das tags 'filhas', substituindo o uso do <div> a cada momento */}