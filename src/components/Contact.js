import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_hmtxdxe', 'template_b93ndgb', formData, 'IgfkkoyDXvxFAWfti')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message, please try again.');
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#0F9D58] mb-8">Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto">
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          required 
          value={formData.from_name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="from_email" 
          placeholder="Your Email" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          required 
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          rows="4" 
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="px-6 py-3 bg-[#DB4437] text-white font-semibold rounded-lg">
          Send Message
        </button>
      </form>
      <p className="mt-4 text-green-600">{status}</p>
    </section>
  );
};

export default Contact;
