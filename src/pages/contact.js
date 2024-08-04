import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>

            <p>
                If you have any questions about our services, booking travel packages, or need help with any other inquiries, please don't hesitate to contact us. We'll be happy to help.
            </p>


<p>

    Address: ABC Main Street, Downtown
    <br />
    Phone: (140) 111-8090
    <br />
    Email: info@dadventure.com
    <br />
    Fax: (987) 654-3210
    <br />
    Website: www.dadventure.com
    <br />

    Social Media:
    <a href="https://www.facebook.com/dadventureagency/">Facebook</a>
    <a href="https://www.instagram.com/dadventureagency/">Instagram</a>
    <a href="https://www.twitter.com/dadventureagency/">Twitter</a>
    <a href="https://www.linkedin.com/company/dadventureagency/">LinkedIn</a>







</p>



            <p>
            For any inquiries, please contact us by filling out the form below. We will respond as soon as possible.

            </p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label for="message">Message:</label>
                <textarea id="message" name="message" />
                <br />
                <button type="submit">Send</button>
            </form>
        </div>





    );
};

export default Contact;