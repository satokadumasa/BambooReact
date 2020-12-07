import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Users/">Users</Link>
              </li>
              <li>
                <Link to="/Books/">Books</Link>
              </li>
              <li>
                <Link to="/Conferences/">Conferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;