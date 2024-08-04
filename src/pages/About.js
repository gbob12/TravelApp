import React from 'react'
import about from '../styles/about.css'
import footer from '../styles/footer.css'
import TsunamiIcon from '@mui/icons-material/Tsunami';


function About() {
    return (

       <div className = 'container' >

            <h1 className='title'>About US</h1>
            <p className='description'>D < TsunamiIcon/>  Adventure is a family-friendly travel agency that offers a wide range of adventures and experiences for families, friends, and travel enthusiasts. We have a team of experienced travelers and photographers who will guide you through the world, offering you a unique and unforgettable experience. </p>
            <button className= "btn btn-primary" >
                Learn More

                </button>

            <h2 className='title'>Our Mission</h2>
            <p className='description'>Our mission is to create a family-friendly and inclusive travel experience for our clients. By offering a diverse range of adventures and experiences, we aim to inspire and empower our clients to make their own dreams come true. </p>
            <h2 className='title'>Testimonials</h2>
            <div className='testimonials'>
                <div className='testimonial'>
                    <p> "DAdventure has been our go-to travel agency for the past five years. We've had the opportunity to explore some of the most incredible places around the world, and we are all so grateful for their support." - John Doe</p>
                </div>
                <div className='testimonial'>
                    <p> "I've always been fascinated by the world, and D Adventure has been the perfect way to explore new places. We've had the opportunity to visit some amazing landscapes, and I can't wait to share our experiences with others." - Jane Smith</p>
                </div>
                <div className='testimonial'>
                    <p> "I've always loved traveling, and D Adventure has been the perfect way to experience new experiences. We've had the opportunity to visit some amazing landscapes

                         and I can't wait to share our experiences with others." - Mark Johnson</p>

                    </div>

                </div>


        </div>








    );
}

export default About
