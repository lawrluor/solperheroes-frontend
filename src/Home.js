import React from 'react';
import appStyles from './App.module.css';
import './App.css';

import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';

import NavBar from './NavBar';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';

const VIDEO_URL = "https://youtu.be/1jzROE6EhxM";
// const TEAM_IMG_DEFAULT = "https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/yellow_circle.png?raw=true"
const TEAM_DATA = [
  {
    "name": "BKDip2311",
    "image": "https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/bkdip2311_profile.png?raw=true",
    "role": "Founder",
    "blurb": "Mr Genesis has long history into the cryptoverse. Having held crypto in \"cold storage\" since 2013 Mr G has seen the transformation of this world leading technology. He is also guardian and caretaker of this mischievous bunch. The SolPerHeros. The SolPerheros are freshly born from the Solana blockchain and they need guidance on how to help the community but more importantly behave themselves.  In this new world they find themselves in,  Mr. Genesis will guide these SolPerHeros on this epic journey as they give back to humanity."
  },
  {
    "name": "nicktheengineer",
    "image": "https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/nicktheengineer_profile.png?raw=true",
    "role": "Founder",
    "blurb": "Crytpo investor by day, Solperhero fabricator by night. Looking for a portal to the metaverse while dodging questions from wife on why he must spend so much money on NFTs."
  },
  {
    "name": "the law",
    "image": "https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/the_law.png?raw=true",
    "role": "Lead Dev",
    "blurb": "Creator of apps, smart contracts, and everything in-between. Responsible for freeing and releasing the SolPerHeros into the Solana mainnet."
  },
  {
    "name": "tooth",
    "image": "https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/green_circle.png?raw=true",
    "role": "Founder",
    "blurb": ""
  }
]

const Home = () => {
  const generateTeam = () => {
    return TEAM_DATA.map((member) => {
      return (
        <div className="teamMember">
          <div className="imgContainer">
            <img src={member.image} alt="team member"/>
          </div>
          <h2>{member.name}</h2>
          <h6 className="subTitle">{member.role}</h6>
          <br/>
          <h6 className="subTitle">{member.blurb}</h6>
        </div>
      )
    })
  }

  return (
    <div className="App">
      
      <NavBar />

      <main className="App-main">
        <section className="block1">
          <div className="block1content">
            <div className="logoContainer">
              <img 
                src={"https://github.com/lawrluor/solperheroes-frontend/blob/main/src/assets/img/solperheros_banner.png?raw=true"} 
                className="App-logo" 
                alt="logo" 
              />
            </div> 

            <div className="block1description">
              <p>
                Introducing <strong>SolPerHeros</strong>, the NFT that gives back. Created on the Solana blockchain with a focus on raising money for charity, there are thousands of unique, one-of-a-kind collectibles. Choose your <strong>SolPerHero</strong> and make a difference!
              </p>
            </div>

            <div className="buttonContainer">
              {/* <a
                className="App-button"
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER <BsTwitter className="iconStyle" />
              </a> */}

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
                <IoRocketSharp className="icon" /> <h5 className="subTitle">SolPerHeros were always traveling the Solana blockchain. But they needed a way out, and they found it. The blockchain is alive and SolPerHeros in the form of unique NFTs want to use their unique powers to help in our world. </h5>
              </div>

              <div className="iconTextContainer">
                <IoRocketSharp className="icon" /> <h5 className="subTitle">Once the 5000 SolPerHeros are minted and accounted for, <strong>a percentage of the overall mint collection will be donated to real charities</strong> that can help solve problems in the real world. But a SolPerhero never stops working. Every time one of the 5000 unique SolPerHeros is traded in the secondary market, <strong>a portion of that transaction will also be donated to charities.</strong> They travel the blockchain fighting for humanity with every transaction!</h5>
              </div>
            </div>
          </div>
        </section>
        
        <section className="blockVideo">
          <VideoPlayer />
        </section>

        <section className="block3">
          <div className="block3content">
            <div className="titleContainer">
              <h1>MEET THE TEAM</h1> 
            </div>

            <section className="teamList">
              {generateTeam()}
            </section>
          </div>
        </section>

        <section className="block4">
          <div className="block4content">
            <div className="titleContainer">
              <h1>ROADMAP</h1>
            </div>

            <div className="iconTextContainer">
              <IoRocketSharp className="icon" /> <h5 className="subTitle">Whitelist - TBA</h5>
            </div>

            <div className="iconTextContainer">
              <IoRocketSharp className="icon" /> <h5 className="subTitle">Public Minting - TBA</h5>
            </div>

            <div className="iconTextContainer">
              <IoRocketSharp className="icon" /> <h5 className="subTitle">Special SolPerHero Air Drop - TBA</h5> 
            </div>
            
            <div className="iconTextContainer">
              <IoRocketSharp className="icon" /> <h5 className="subTitle">Secondary Market Add-ons - TBA</h5>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;