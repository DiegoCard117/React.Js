import logo from './logo.svg';
import './App.css';
import {Footer, Header, Aside} from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lorem
        </p>
        <Aside/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          testando
        </a>
      </header>
      <Footer/>

    </div>
  );
}

export default App;
