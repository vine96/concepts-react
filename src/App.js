import './App.css';
import HelloWorld from './components/HelloWorld';
import Phrase from './components/Phrase';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';

function App() {

  const name = 'Vinícius'
  const newName = name.toLocaleUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://aidobonsai.com/wp-content/uploads/2011/05/caricaturas-de-jogadores-ronaldinho-gaucho.jpg?w=420'
  const namePerson = 'Sukito'
  const occupation = 'Gato'
  const age = '9 meses'

  return (
    <div className="App">
      <Event number={1}/>
      <Event number={2}/>
      <Form/>
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <h2>Alterando o JSX</h2>
      <h3>O seu nome é: {name}</h3>
      <h4>O seu nome em maiúsculo é: {newName}</h4>
      <p>Multiplicação: {2 * 2}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Imagem de uma caricatura de Ronaldinho Gaúcho" />
      <HelloWorld/>
      <Phrase/>
      <Phrase/>
      <SayMyName name="Vinícius"/>
      <SayMyName name="Pedro"/>
      <SayMyName name={namePerson}/>
      <Person photo={url} name={namePerson} occupation={occupation} age={age}/>
      <List/>
      <List/>
    </div>
  );
}

export default App;
