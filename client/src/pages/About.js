// import React from 'react';

// const About = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>About Page</h2>
//       <p>This page tells users what the app is about.</p>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between excess and need by creating a platform where surplus food
          can be shared with those who need it the most. Our goal is to reduce food waste and feed more people.
        </p>
      </section>

      <section className="overview">
        <h3>Vision</h3>
        <p>
          Meal Bridge is a community-driven food donation website. It enables individuals with excess
          food to share it with those in need. Whether it's a household or a local event with leftovers,
          donors can post food details and make it accessible to nearby recipients.
        </p>
      </section>

      <section className="why">
        <h3>Why We Started</h3>
        <p>
          Every day, large quantities of food go to waste while many people go hungry. We started this
          initiative to offer a simple, tech-enabled solution to help reduce waste and build stronger,
          more caring communities.
        </p>
      </section>

      <section className="how">
        <h3>How It Works</h3>
        <p>
          Donors create a post with food details, quantity, pickup time, and contact info. 
          Recipients can browse available food posts, contact donors directly, and make an agreement 
          for collection. No middlemen, just community support.
          
        </p>
      </section>
    </div>
  );
};

export default About;

