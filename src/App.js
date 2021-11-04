import './App.css';

import { BsDiscord, BsTwitter, BsChevronDown } from 'react-icons/bs';

const TEAM_IMG_DEFAULT = "https://simply-branded.com/wp-content/uploads/2019/11/service1_navy_circle.png"
const TEAM_DATA = [
  {
    "name": "THE LAW",
    "image": "https://github.com/lawrluor/solperheroes-frontend/blob/main/public/img/the_law.png?raw=true",
    "role": "Lead Dev",
    "blurb": "Hello"
  },
  {
    "name": "Tooth",
    "image": TEAM_IMG_DEFAULT,
    "role": "Role",
    "blurb": "Hello"
  },
  {
    "name": "BKDIP2311",
    "image": TEAM_IMG_DEFAULT,
    "role": "Role",
    "blurb": "Hello"
  },
  {
    "name": "???",
    "image": TEAM_IMG_DEFAULT,
    "role": "Role",
    "blurb": "Hello"
  },
]

function App() {
  const generateTeam = () => {
    return TEAM_DATA.map((member) => {
      return (
        <div className="teamMember">
          <div className="imgContainer">
            <img src={member.image} alt="team member"/>
          </div>
          <h2>{member.name}</h2>
          <h6 className="subTitle ">{member.role}</h6>
          {/* <p>{member.blurb}</p> */}
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>SOLPERHEROS</h2> 
        <h5 className="subTitle">...coming soon</h5>
      </header>

      <main className="App-main">
        <section className="block1">
          <div className="block1content">
            <div className="logoContainer">
              <img src={"https://github.com/lawrluor/solperheroes-frontend/blob/main/public/img/solperheroes_banner.jpg?raw=true"} className="App-logo" alt="logo" />
            </div> 

            <p>
              Introducing <strong>SOLPERHEROS</strong>, the NFT that will reinvent charity online. Created on the <strong>Solana</strong> blockchain, there are thousands of unique, one-of-a-kind collectibles. Choose your Solperhero and make a difference!
            </p>

            <div className="buttonContainer">
              <a
                className="App-button"
                href="https://twitter.com/home"
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
            <div className="titleContainer">
              <h1>WHO ARE THE SOLPERHEROS?</h1>
            </div>
            <h5 className="subTitle bodyText">At first the Solperheros are what they are at face value. A cute, clean, superhero machine looking to do good. Along the way we see these heros are not everything they seemed. They fight with each other over meaningless issues. They get bored quite easily. If they are not tasked with being out on the blockchain to raise money for charity, well you know what they say. Idle hands are the Devil’s workshop.</h5>
          </div>
        </section>

        <section className="block3">
          <div className="titleContainer">
            <h1>MEET THE TEAM</h1> 
          </div>
          <section className="teamList">
            {generateTeam()}
          </section>
        </section>
      </main>

      <footer className="App-footer">
        ©2021 by Solperheroes NFT
      </footer>
    </div>
  );
}

export default App;
