import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <Link to="/" className="navbar-brand" >LOGO</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExample06">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Services</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar