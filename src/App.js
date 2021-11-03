import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Solperheroes</p> 
      </header>

      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Solperheroes.
        </p>
        <a
          className="App-button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Twitter
        </a>

        <a
          className="App-button"
          href="https://discord.gg/yDrEzYYje7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </a>
        
      </main>

      <footer className="App-footer">
        Copyright 2021 by Solperheroes NFT
      </footer>
    </div>
  );
}

export default App;
