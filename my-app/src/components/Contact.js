// import React, { useState } from "react";
// import { validateEmail } from '../utils/helpers'
// import Button from 'react-bootstrap/Button';

// function Contact() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const [errorMessage, setErrorMessage] = useState('');
//     const { name, email, message } = formState;

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!errorMessage) {
//         console.log('Submit Form', formState);
//       }
//     };

//     const handleChange = (e) => {
//       if (e.target.name === 'email') {
//         const isValid = validateEmail(e.target.value);
//         if (!isValid) {
//           setErrorMessage('Your email is invalid.');
//         } else {
//           setErrorMessage('');
//         }
//       } else {
//         if (!e.target.value.length) {
//           setErrorMessage(`${e.target.name} is required.`);
//         } else {
//           setErrorMessage('');
//         }
//       }
//       if (!errorMessage) {
//         setFormState({ ...formState, [e.target.name]: e.target.value });
//         console.log('Handle Form', formState);
//       }
//     };

//     return (
//       <section className="contact-container">
//         <h1>Contact me</h1>
//         <div className="contact-form">
//         <div className="contact-statement">
//         <p>Thank you for taking the time to view my portfolio, please contact me for any questions or inquiries.</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input className="input-field" type="text" name="name" defaultValue={name} onBlur={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <input className="input-field" type="email" name="email" defaultValue={email} onBlur={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea className="input-field" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//           </div>
//           {errorMessage && (
//             <div>
//               <p className="error-text">{errorMessage}</p>
//             </div>
//           )}
//           <Button className="contact-btn" data-testid="button" type="submit">Submit</Button>
//         </form>
//         </div>
//       </section>

//     );
// }

// export default Contact;

// ~~~~~~~~~~~~~~~~~~~~~~~

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cko5hpg', 'template_3o7wveb', form.current, 'CaIauTER79fcejYCF')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          // This will clear the form after successful submit
          e.target.reset();    
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
    <h1 className="contact-title">Contact me</h1>
    <div className="contact-container">
    <div className="contact-statement">
 <p>Thank you for taking the time to view my portfolio, please contact me for any questions or inquiries.</p>
</div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="contact-btn" type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};

export default Contact;