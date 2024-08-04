import React ,{useState} from 'react';
import{Link}from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import '../styles/navbar.css';
import {Button} from "../Button";

function Navbar() {
    const [openLinks,setOpenLinks]=useState(false);




    const  toggleNavbar= ()=>
        setOpenLinks(!openLinks);




    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open":"close"}>

                < div className="hiddenLinks">


                <Link to="/" className="navbar- logo">
                   D < TsunamiIcon/> ADVENTURE
                </Link>
            </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>

                <Link to="/services">Services</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>




                <button onclick={Navbar}>
                <ReorderIcon/>
                    </button>

            </div>
        </div>

    );
}

export default Navbar;