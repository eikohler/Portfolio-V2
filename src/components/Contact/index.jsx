import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
          
    return (
        <section>
          <h1>Contact me</h1>
          <p>Email:<a href="mailto:erickohler1600@gmail.com">erickohler1600@gmail.com</a></p> 
          <p>Phone:<a href="tel:9059642757">905.964.2757</a></p> 
          <form className="mt-5" id="contact-form" onSubmit={handleSubmit}>
        <div className='container-fluid'>
            <section className='row mb-2'>
                <div className='col-6 p-0 pr-1'>
                    <input className="w-100" placeholder="Your Name" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div className='col-6 p-0 pl-1'>
                    <input className="w-100" placeholder="Your Email" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div className='mt-2 col-12 p-0'>
                    <textarea className="w-100" placeholder="Your Message" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            </section>
        </div>
            <button type="submit">Submit</button>
          </form>
        </section>
    );
}

export default ContactForm;