import React from 'react';

import './Navbar.css';

function Navbar(){
    return(
        <section className="navbar">{/*Navbar*/}
            <a href="http://www.google.com" className="navbar-item">Home</a> {/*Anggota Navbar*/}
            <a href="http://www.google.com" className="navbar-item">About</a> {/*Anggota Navbar*/}
            <a href="http://www.google.com" className="navbar-item">Shop</a> {/*Anggota Navbar*/}
            <a href="http://www.google.com" className="navbar-item">Contact</a> {/*Anggota Navbar*/}
        </section>
    )
}


export default Navbar;