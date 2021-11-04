import logo from './logo.png';
import './App.css';

import { BsDiscord, BsTwitter, BsChevronDown } from 'react-icons/bs';

const TEAM_DATA = [
  {
    "name": "THE LAW",
    "image": "",
    "role": "Lead Dev",
    "blurb": "Hello"
  },
  {
    "name": "Tooth",
    "image": "",
    "role": "Role",
    "blurb": "Hello"
  },
  {
    "name": "BKDIP2311",
    "image": "",
    "role": "Role",
    "blurb": "Hello"
  },
  {
    "name": "???",
    "image": "",
    "role": "Role",
    "blurb": "Hello"
  },
]

function App() {
  const generateTeam = () => {
    return TEAM_DATA.map((member) => {
      return (
        <div className="teamMember">
          <img src={member.image} alt="team member image"/>
          <h2>{member.name}</h2>
          <h3 className="subTitle">{member.role}</h3>
          {/* <p>{member.blurb}</p> */}
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="titleText">SOLPERHEROS</h2> 
      </header>

      <main className="App-main">
        <section className="block1">
          <div className="block1content">
            <div className="logoContainer">
              <img src={"https://github.com/lawrluor/solperheroes-frontend/blob/main/public/img/solperheroes_banner.jpg?raw=true"} className="App-logo" alt="logo" />
            </div> 

            <p className="bodyText">
              SOLPERHEROS: the NFT that is reinventing charity online. Created on the Solana blockchain, there are thousands of unique, one-of-a-kind collectibles. Choose your Solperhero and make a difference!
            </p>

            <div className="buttonContainer">
              <a
                className="App-button"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER <BsTwitter className="iconStyle" />
              </a>

              <a
                className="App-button"
                href="https://discord.gg/yDrEzYYje7"
                target="_blank"
                rel="noopener noreferrer"
              >
                DISCORD <BsDiscord className="iconStyle" />
              </a>
            </div>
          </div>
        </section>

        {/* <BsChevronDown className="downArrow" /> */}

        <section className="block2">
          <div className="block2content">
            <h1 className="titleText">WHO ARE THE SOLPERHEROS?</h1>
            <p className="bodyText">At first the Solperheros are what they are at face value. A cute, clean, superhero machine looking to do good. Along the way we see these heros are not everything they seemed. They fight with each other over meaningless issues. They get bored quite easily. If they are not tasked with being out on the blockchain to raise money for charity, well you know what they say. Idle hands are the Devil’s workshop.</p>
          </div>
        </section>

        <section className="block3">
          <h1 className="titleText">MEET THE TEAM</h1> 
          <section className="teamList">
            {generateTeam()}
          </section>
        </section>
      </main>

      <footer className="App-footer">
        Copyright 2021 by Solperheroes NFT
      </footer>
    </div>
  );
}

export default App;
