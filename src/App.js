import logo from './logo.svg';
import './App.css';
import { Heading } from './component/common/topography';
import Loader from './component/loader';

function App() {
  return (
    <div className="App">
      <Loader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading weight="600" color="#fff">
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
