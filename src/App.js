import './App.css';
import HelloWorld from './components/HelloWorld';
import Eventos_1 from './components/Eventos_1';
import Eventos_2 from './components/Eventos_2';
import Eventos_3 from './components/Eventos_3';
import Props from './components/Props';
import MoreProps from './components/MoreProps';
import Structure from './components/Structure';
import styles from './CSS/Image.module.css'
import Fragments from './components/Fragments';
import Proptypes from './components/Proptypes';
import UseState from './components/UseState';
import MetodosParaEventos from './components/Eventos/MetodosParaEventos';
import RederizacaoCondicional from './components/RenderizacaoCondicional';

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
      <Props nome="Israel"/><Props nome={sobrenome}/>
      <hr/>
      <MoreProps nome="Israel" idade={21} sexo="Maculino" variavel/>
      <hr/>
      <Structure nome="Israel" idade={21} sexo="Masculino"/>
      <hr/>
      <Fragments/>
      <hr/>
      <Proptypes nome="Israel" idade="1990" sexo="Masculino"/>
      <hr/>
      <Eventos_1/>
      <hr/>
      <Eventos_2 parametro_1='Israel' parametro_2={2003}/>
      <hr/>
      <Eventos_3/>
      <hr/>
      <UseState/>
      <hr/>
      <MetodosParaEventos/>
      <hr/>
      <RederizacaoCondicional/>
    </div>
  );
}

export default App;
