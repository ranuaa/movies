import { Navbar, Container } from 'react-bootstrap';
import React from 'react';
import logo from '../assets/images/logo.png';
import '../style/pertama.css'
const NavigationBars = () => {
    return (
       <div>
         <Navbar className='navigasi'>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>
       </div>
    )
}

export default NavigationBars;