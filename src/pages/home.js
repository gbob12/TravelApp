import React from 'react'
import{Link} from 'react-router-dom';
import '../styles/home.css';
import background from '../Pictures/Split-Rock-Dominica.jpg';
import TsunamiIcon from '@mui/icons-material/Tsunami';

function home() {
    return (


        <div className='Home' style={{backgroundImage: `url(${background})`,

            }} >

            <div className= 'header'>
                <h1> Welcome to D<TsunamiIcon/>Adventure </h1>

                <p>Turn your dreams into reality. </p>
            </div>
        </div>
    )
}

export default home
