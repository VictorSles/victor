import Components from "./Components";
import styles from '../CSS/HelloWorld.module.css';
function HelloWorld() {
    return (
        <div className={styles.mydiv}>
            <Components />
            <h3 className={styles.myh3}>Meu Primeiro Componente</h3>
        </div>
    );
};
export default HelloWorld

{/* 
 >>> O arquivo CSS precisa ter a extensão '.module.css' para funcionar aplicado à módulos 
 >>> Os imports sempre precisam estar no topo do script   
*/ } 