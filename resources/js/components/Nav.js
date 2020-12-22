import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
  return(
    <div className="container">

    
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/"><strong className="h5">Laravel & React</strong>
        </Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/addContact">AddContact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}
export default Nav;