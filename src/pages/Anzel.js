import { NavLink, Outlet } from "react-router-dom"

import anzelco_logo from '../portfolio/anzel-co-circle-cutout.png'

import './Anzel.css'

const Anzel = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink className='navlink-logo' to='/' >
                    <img className="logo" src={anzelco_logo} alt='anzelco_logo' />
                </NavLink>
                <ul className="navlinks">
                    <li className="navlink">
                        <NavLink to='/about' >
                            About
                        </NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink to='projects' >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet/>
            
            <footer className="footer">
                &copy; COPYRIGHT 2023 ANZEL.CO ALL RIGHTS RESERVED
            </footer>
        </>
    )
}

export default Anzel