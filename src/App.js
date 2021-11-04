import './App.css';

import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';

const TEAM_IMG_DEFAULT = "https://simply-branded.com/wp-content/uploads/2019/11/service1_navy_circle.png"
const TEAM_DATA = [
  {
    "name": "BKDIP2311",
    "image": TEAM_IMG_DEFAULT,
    "role": "Role",
    "blurb": "Hello"
  },
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
              <img src={""} className="App-logo" alt="logo" />
            </div> 

            <p>
              Introducing <strong>SOLPERHEROS</strong>, the NFT that gives back to humanity. Created on the Solana blockchain with a focus on raising money for charity, there are thousands of unique, one-of-a-kind collectibles. Choose your <strong>SOLPERHERO</strong> and make a difference!
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
          
            <div>
              <div className="iconTextContainer">
                <IoRocketSharp className="icon" /> <h5 className="subTitle">SolPerheros were always traveling the Solana blockchain. But they needed a way out, and they found it. The blockchain is alive and SolPerheros in the form of unique NFTs want to use their unique powers to help in our world. </h5>
              </div>

              <div className="iconTextContainer">
                <IoRocketSharp className="icon" /> <h5 className="subTitle">Once the 5000 SolPerheros are minted and accounted for, <strong>a percentage of the overall mint collection will be donated to real charities</strong> that can help solve problems in the real world. But a SolPerhero never stops working. Every time one of the 5000 unique SolPerheros is traded in the secondary market, <strong>a portion of that transaction will also be donated to charities.</strong> SolPerheros never sleep! They travel the blockchain fighting for humanity with every transaction.</h5>
              </div>
            </div>
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

        <section className="block4">
          <div className="titleContainer">
            <h1>ROADMAP</h1>
            <h5 className="subTitle">...to be announced</h5>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        ©2021 by Solperheroes NFT
      </footer>
    </div>
  );
}

export default App;
