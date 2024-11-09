import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Eventos from './components/Eventos';

function App() {
  function plus(a,b){
    return a+b
  }
  const immge = "https://via.placeholder.com/150"
  return (
    <div className='MyFirstDiv'>
      <h1>Meu primeiro teste</h1>
      <p>Meu primeiro parágrafo</p>
      <p>Soma: {plus(2,3)}</p>
      <img src={immge} alt='imagem'/>
      <HelloWorld/>
      <Eventos/>
    </div>
  );
}

export default App;
