import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="App-header">
      <h2>SOLPERHEROS</h2> 
      {/* <h5 className="subTitle">...coming soon</h5> */}
      <nav
        style={{
          paddingBottom: "1rem"
        }}
      >
        <Link to="/" className="navlink">Home</Link> |{" "}
        <Link to="/future" className="navlink">Future</Link> |{" "}
        <a href="https://discord.gg/yDrEzYYje7" className="navlink" target="_blank" rel="noopener noreferrer">Discord</a>
      </nav>
    </header>
  )
}

export default NavBar;