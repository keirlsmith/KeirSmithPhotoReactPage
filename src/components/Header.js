import { useState } from 'react';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import KSlogo from '../app/assets/img/KSlogo.png';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <>
            
            <Navbar dark color='primary' sticky='top' expand= 'md'>
                
                <NavbarToggler onClick= {() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className = 'm-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/directory'>              
                                <i className='fa fa-list fa-lg' /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <NavbarBrand className='navbar-brand' href='/'>
            
                <h1 className = 'header mb-0'>Keir Smith Photography</h1>
                </NavbarBrand>
        </>
        
    );
};


export default Header;