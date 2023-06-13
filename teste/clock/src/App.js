import logo from './logo.svg';
import './App.css';
import {Footer, Header, tick} from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lorem
        </p>
        <tick />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          testando
        </a>
      </header>
      <Footer dados={ {ano: 2023} } />

    </div>
  );
}

export default App;
