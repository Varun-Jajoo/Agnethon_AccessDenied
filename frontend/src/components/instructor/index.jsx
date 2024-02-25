'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Instructor = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vf1924n', 'template_f6l2onx', form.current, {
        publicKey: 'Imk9sSRKC6LwoUVC7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" />
      <input style={{marginTop:'200px'}} type="submit" value="Send" />
    </form>
  );
};
export default Instructor