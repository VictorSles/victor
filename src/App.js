import './App.css';
import HelloWorld from './components/HelloWorld';
import Eventos from './components/Eventos';
import Props from './components/Props';
import MoreProps from './components/MoreProps';
import Structure from './components/Structure';
import styles from './CSS/Image.module.css'
import Fragments from './components/Fragments';

function App() {
  function plus(a,b){
    return a+b
  }
  const sobrenome = "Sales"
  const immge = "https://via.placeholder.com/150"
  return (
    <div className='MyFirstDiv'>
      <h1>Meu primeiro teste</h1>
      <p>Meu primeiro parágrafo</p>
      <p>Soma: {plus(2,3)}</p>
      <img src={immge} alt='imagem' className={styles.minhaImagem}/>
      <hr/>
      <HelloWorld/>
      <hr/>
      <Eventos/>
      <hr/>
      <Props nome="Israel"/><Props nome={sobrenome}/>
      <hr/>
      <MoreProps nome="Israel" idade={21} sexo="Maculino" variavel/>
      <hr/>
      <Structure nome="Israel" idade={21} sexo="Masculino"/>
      <hr/>
      <Fragments/>
    </div>
  );
}

export default App;
