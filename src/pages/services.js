
import{Link} from 'react-router-dom';

import  '../styles/services.css';
import tour  from '../Pictures/background 500 300.jpg' ;

import hotel from'../Pictures/deluxe1-1-500x300.jpg';


import flight from'../Pictures/online-booking-500 300.jpg';





import React, { useState } from 'react';



const Services = () => {
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
    });

    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bookingDetails);

    };

    const handleBookNow = (service) => {
        setShowForm(true);
        setBookingDetails({ ...bookingDetails, service: service });
    };

    return (
        <div className="service-page">
            <h1>Our Services</h1>
            <div className="services-container">
                <div className="service-card">
                    <img src={flight} alt="Flight Booking" />
                    <h2>Flight Booking</h2>
                    <p>
                      Book your flight with
                        our flight booking services
                        with ease and convenience.

                    </p>


                    <button onClick={() => handleBookNow('flight')}>Book Now</button>
                </div>
                <div className="service-card">
                    <img src={hotel} alt="Hotel Booking"/>
                    <h2>Hotel Booking</h2>
                    <p>Book your hotel
                        with our hotel booking services
                        with ease and convenience.


                    </p>
                    <button onClick={() => handleBookNow('hotel')}>Book Now</button>
                </div>
                <div className="service-card">
                    <img  src={tour} alt="Package Tours" />
                    <h2>Package Tours</h2>
                    <p>Book our package tours
                        with ease and convenience.


                    </p>
                    <button onClick={() => handleBookNow('package')}>Book Now</button>
                </div>
            </div>
            {showForm && (
                <div className="booking-form-popup">
                    <h2>Book Your Service</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={bookingDetails.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={bookingDetails.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={bookingDetails.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Service:</label>
                            <input
                                type="text"
                                name="service"
                                value={bookingDetails.service}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={bookingDetails.date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Time:</label>
                            <input
                                type="time"
                                name="time"
                                value={bookingDetails.time}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea
                                name="message"
                                value={bookingDetails.message}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Book Now</button>
                        <button onClick={() => setShowForm(false)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Services;






