import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 1
  });
  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    //console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.name.trim() === "" || formData.email.trim() === "" || formData.feedback.trim() === ""){
      alert('Please type in all fields');
    }else{
      console.log(formData.name);
      console.log(formData.email);
      console.log(formData.feedback);
      const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
      `;
      const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
      if(isConfirmed){
        console.log('Submitting feedback', formData);
        setFormData({
          name: '',
          email: '',
          feedback: '',
          rating: 1
        });
        alert('Thank you for your valuable feedback!')
      }
    }
  }
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange}/>
        <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}/>
        <textarea name='feedback' placeholder='Your Feedback' value={formData.feedback} onChange={handleChange}></textarea>
        <div className='rangeRating'>
          <input type='range' name='rating' min='1' max='5' value={formData.rating} onChange={handleChange} />
          <br/>
          <label htmlFor='rating'>{formData.rating}</label>
        </div>
        <br/>
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
