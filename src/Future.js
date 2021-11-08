import './App.css';

function Future() {
  return (
    <div>
      <header className="App-header">
        <h2>THE FUTURE</h2> 
        <h5 className="subTitle">...coming soon</h5>
      </header>

      <main className="App-main">
        <section className="block1">
          <div className="block1content">
            The Future
            SolPerHeros have a plan to pave their way into the future post mint with a roadmap that’s sure to appease the NFT community. We will be detailing these plans as we head into launch date. For the core Solperhero NFT holders we will be doing a randomized air drop of something special into each SolPerhero wallet very soon post mint. These SolPerHeros are here to help the world but they can’t help being mischievous and you never know what this team is up to. We would love to tell you more but where’s the excitement in knowing everything now. Just know holders post mint will have some cool rewards and updates to look forward to as they help the SolPerheros give back to humanity and take their proper place in the world of NFTs.
          </div>
        </section>

        {/* <BsChevronDown className="downArrow" /> */}

        <section className="block2">
          <div className="block2content">
            <div className="titleContainer">
              <h1>Metaverse</h1>
            </div>

            Metaverse 
            Of course the SolPerHeros will need a land of their own in the Metaverse and that’s in the works with details to follow. 
          </div>
        </section>
      </main>

      <footer className="App-footer">
        ©2021 by SolPerHeros NFT
      </footer>
    </div>
  );
}

export default App;
