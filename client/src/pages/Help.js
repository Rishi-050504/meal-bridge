import React, { useState } from 'react';
import './Help.css';

const faqData = [
  {
    question: 'How do I donate via Meal-Bridge?',
    answer: 'You can donate any food item you like to contribute. Donations can be made through filling the necessary details and submitting the contact details. The Donation form appears in the donate page',
  },
  {
    question: 'Does Meal-Bridge pick up or receive food being donated',
    answer: 'Meal-Bridge does not pickup or recieve food being donated. We have developed a platform to establish network between people who want to donate and people who are needy. The concerned person who requests for donation may take the food my themselves ',
  },
  {
    question: 'I want to donate but I do not find my city/town listed',
    answer: 'Meal-bridge makes efforts to locate major areas in every city/town, but is unable to find operating areas in all cities or towns. In such a case do not hesitate to send a message to us so that we can find a solution.',
  },
  {
    question: 'What steps should be taken before donating food',
    answer: 'Make sure the food lasts atleast 6 hrs before spoiling, Pack it properly, Be available for the receipient ',
  },
  {
    question: 'Who can donate food?',
    answer: 'Anyone who wants to feed the needy, be it Individuals, restaurants, grocery stores, farms, and any other food businesses.',
  },
  {
    question: 'What types of food can I donate?',
    answer: 'Shelf-stable goods, fresh produce, packaged meals, or surplus from events.',
  },
  {
    question: 'I’m having trouble with the website. What should I do?',
    answer: 'Contact support via the help center or email provided.',
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-layout">
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>How can I help you?</h2>
        <p className="intro-text">
          Please take a few moments to let me know about yourself and your health goals
          before we start working together.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter a valid email address" required />
          <textarea placeholder="Your message here..." rows="4" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Help;
