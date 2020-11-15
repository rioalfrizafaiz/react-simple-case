import React from 'react';
import {Navbar} from '../../components'

import './Header.css';

function Header(){
    return(
        <section className="header">{/*Section Header */}
            <section className="header-top">{/*Top Header */}
                <section className="header-top-logo">{/*Wadah Logo*/}
                    <a href="http://www.google.com" className="header-logo">
                        <img src="https://i.pinimg.com/originals/7d/7d/22/7d7d22a40c8ef0bb471d8d9a51f615af.png" alt="Logo Kambing" className="header-logo-image">
                        </img>
                    </a>{/*Logo*/}
                </section>
                <section className="header-top-navbar">{/*Navbar*/}
                    <section className="header-top-anggota-navbar">{/*Anggota Navbar*/}
                        <Navbar/>
                    </section>
                    <hr className="header-top-separator"/>
                </section>
            </section>

            <section className="header-bottom">{/*Bottom Header */}
                <section className="header-bottom-phone">{/*No Telepon */}
                    +62 895 1022 2521
                </section>
                <section className="header-bottom-phone">{/*Email */}
                    r.alfriza@gmail.com
                </section>
            </section>
            
        </section>
    )
}

export default Header;