import React from 'react';
import { FaUser } from 'react-icons/fa';


function Navbar({ name, email, addSender }) {

    const toggleOverlay = () => {
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
    }

    return (
        <>
            <nav className="navbar navbar-expand bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto" href="#">
                        AWS Cloud Community - LPU
                    </a>
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link" href="#" onClick={toggleOverlay}><FaUser /></a>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
