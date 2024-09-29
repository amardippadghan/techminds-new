import React from 'react';
import TUICard from '../commons/TUICard';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import ContactForm from '../Forms/ContactFrom';

function ContactUs() {
    return (
        <section className="container mx-auto p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4 items-center text-center">

                Contact us
            </h1>
            <div className="text-center mb-4">
                <h3 className="text-3xl font-bold mb-4">We are here to assist you</h3>
                <p className="text-lg mb-4">
                    Feel free to contact us or just drop a line here. Our career counsellor will reach you soon
                </p>
                <p className="text-lg font-semibold mb-4">Our working hours:</p>
                <p className="text-md mb-4">10 am to 11 pm (Monday to Saturday)</p>
            </div>
            <div className='flex flex-col justify-between lg:flex-row'>
                <div className='flex justify-center'>
                <div className='p-4'>
                    <div className='m-10'>
                        <TUICard
                            title="Phone No :       7517059705"
                            icon={<i className="fas fa-phone-alt"></i>}
                        />
                    </div>
                    <div className='m-10'>
                        <TUICard
                            title="Email : amardippadghan@gmail.com"
                            icon={<i className="fas fa-envelope"></i>}
                        />
                    </div>
                </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
