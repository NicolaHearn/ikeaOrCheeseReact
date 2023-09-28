import LetsPlay from './components/LetsPlay';
import './App.css';
import GreetUser from './components/GreetUser';
import DisplayWord from './components/DisplayWord';
import Result from './components/Result';
import EndGame from './components/EndGame';

function App() {
  return (
    <div className="App">
      <h1 className="app-header">Ikea or Cheese</h1>
      <LetsPlay />
      <GreetUser />
      <DisplayWord word="cats"/>
      <Result />
      <button>IKEA</button>
      <button onClick={() => {console.log('clicked!')}}>CHEESE</button>
      <EndGame />
    </div>
  );
}

export default App;
