import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogkm0hv', 'template_6cwqt8l', form.current, '3RtjBFIhL4T952m7s')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-neutral-400 rounded-lg p-1 mt-2'>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-4 pl-3 pr-3'>
      <label className='font-bold pb-2 ' >Name</label>
      <input type="text" name="user_name" className='rounded-sm' />
      <label className='font-bold pb-2 pt-2'>Email</label>
      <input type="email" name="user_email" className='rounded-sm'/>
      <label className='font-bold pb-2 pt-2'>Message</label>
      <textarea name="message"className='rounded-sm' />
      <input className='font-bold hover:text-lg pt-2 pb-2'type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;