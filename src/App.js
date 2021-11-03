import logo from './logo.png';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="titleText">SOLPERHEROES</h3> 
      </header>


      <main className="App-main">
        <div className="mainTextContainer">

          <img src={"https://github.com/lawrluor/solperheroes-frontend/blob/main/public/img/solperheroes_banner.jpg?raw=true"} className="App-logo" alt="logo" />

          <p className="bodyText">
            SOLPERHEROES is the NFT that is reinventing charity online. Created on the Solana blockchain, there are thousands of unique, one-of-a-kind collectibles. Choose your Solperhero and make a difference!
          </p>
        </div>

        <a
          className="App-button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TWITTER
        </a>

        <a
          className="App-button"
          href="https://discord.gg/yDrEzYYje7"
          target="_blank"
          rel="noopener noreferrer"
        >
          DISCORD
        </a>
        
      </main>

      <footer className="App-footer">
        Copyright 2021 by Solperheroes NFT
      </footer>
    </div>
  );
}

export default App;
