import React from 'react';
import TUICard from '../commons/TUICard';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import ContactForm from './ContactForm';

function ContactUs() {
    return (
        <section className="container mx-auto p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-2">
                Contact us
            </h2>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">We are here to assist you</h1>
                <p className="text-lg mb-4">
                    Feel free to contact us or just drop a line here. Our career counsellor will reach you soon
                </p>
                <p className="text-lg font-semibold mb-4">Our working hours:</p>
                <p className="text-md mb-4">10 am to 11 pm (Monday to Saturday)</p>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='p-4'>
                    <TUICard
                        title="Phone No : 7894561230"
                        icon={<i className="fas fa-phone-alt"></i>}
                    />
                    <TUICard
                        title="Email : amar17@gmail.com"
                        icon={<i className="fas fa-envelope"></i>}
                    />
                </div>
                <div>
                 <ContactForm/>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
