import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-overlay"></div>

      <div className="about-container">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Meal Bridge connects surplus food with people who need it—cutting waste, feeding lives, and building a kinder community.
          </p>
        </section>

        <section className="overview">
          <h3>Vision</h3>
          <p>
            A world where no good food is wasted and no one goes hungry. We make food donation fast, simple, and local.
          </p>
        </section>

        <section className="why">
          <h3>Why We Started</h3>
          <p>
            We saw good food being tossed while people stayed hungry. So we built a bridge—between those with extra and those in need.
          </p>
        </section>

        <section className="how">
          <h3>How It Works</h3>
          <p>
            <strong>Donors:</strong> Post food details, upload a photo, share with nearby users.<br />
            <strong>Recipients:</strong> Browse, contact the donor, and pick up the food.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
