import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/" ><font className="nav-link">Image Search</font></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/player"><font className="nav-link">Youtube Player</font></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/quizapp"><font className="nav-link">Take A Quiz</font></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu