import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);



const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar className='bg-dark text-dark'>
            <div className='text-primary'>
                <h3>Dress warehouse</h3>
            </div>
            <div>
                <Nav className='items'>
                    <Link to="/home">Home</Link>
                    <Link to="/blog">Blog</Link>
                    {
                        user && <>
                            <Link to="/manage">Manage</Link>
                            <Link to="/additem">Add Item</Link>
                            <Link to="/myitem">My Item</Link>
                        </>
                    }
                    {
                        user ?
                            <button onClick={handleSignOut} className="bg-warning">Sign out</button>
                            :
                            <Link to="/login">Login</Link>
                    }

                </Nav>
            </div>
        </Navbar>

    );
};

export default Header;