import React, { useState } from 'react';
import './Help.css';

const faqData = [
  {
    question: 'What is a Naturopath?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex...',
  },
  {
    question: 'What is a Holistic Nutritionist?',
    answer: 'Phasellus sed rhoncus laoreet purus quis elementum.',
  },
  {
    question: 'How can a Naturopath help me?',
    answer: 'Quisque fringilla sit amet dolor commodo efficitur.',
  },
  {
    question: 'How do online Nutrition consultations work?',
    answer: 'Aliquam et sem odio. In ullamcorper nisi nunc.',
  },
  {
    question: 'What is a “healthy diet”?',
    answer: 'Molestie ipsum iaculis sit amet.',
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
