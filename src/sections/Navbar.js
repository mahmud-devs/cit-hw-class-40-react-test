import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
             <div className="nav_wrapper">
                <div className="logo">
                    <img src="assets/kubb.png" alt="logo"/>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">portfolio</a>
                        </li>
                        <li>
                            <a href="#">services</a>
                        </li>
                        <li>
                            <a href="#">journal</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </div>


             </div>
        </div>

    </nav>
  )
}

export default Navbar