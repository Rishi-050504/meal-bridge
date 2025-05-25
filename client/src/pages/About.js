
// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className="about-page">
//       <div className="about-overlay"></div>

//       <div className="about-container">
//         <section className="mission">
//           <h2>Our Mission</h2>
//           <p>
//             We aim to bridge the gap between excess and need by creating a platform where surplus food
//             can be shared with those who need it the most. Our goal is to reduce food waste and feed more people.
//           </p>
//         </section>

//         <section className="overview">
//           <h3>Vision</h3>
//           <p>
//             Meal Bridge is a community-driven food donation website. It enables individuals with excess
//             food to share it with those in need. Whether it's a household or a local event with leftovers,
//             donors can post food details and make it accessible to nearby recipients.
//           </p>
//         </section>

//         <section className="why">
//           <h3>Why We Started</h3>
//           <p>
//             Every day, large quantities of food go to waste while many people go hungry. We started this
//             initiative to offer a simple, tech-enabled solution to help reduce waste and build stronger,
//             more caring communities.
//           </p>
//         </section>

//         <section className="how">
//           <h3>How It Works</h3>
//           <p>
//             Donors create a post with food details, quantity, pickup time, and contact info. 
//             Recipients can browse available food posts, contact donors directly, and make an agreement 
//             for collection. No middlemen, just community support.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;


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
            At Meal Bridge, our mission is simple yet powerful:
            We strive to connect those who have more than enough with those who don’t have enough. Every day, perfectly edible food is wasted while others go hungry. Our platform provides a bridge—an easy-to-use online space—where individuals, families, and organizations with surplus food can quickly and safely share it with people in need. By doing so, we not only reduce food waste but also promote kindness, sharing, and community well-being.
          </p>
        </section>

        <section className="overview">
          <h3>Vision</h3>
          <p>
            We envision a world where no good food goes to waste and no person goes hungry.
            Meal Bridge is a community-centered food donation platform built for everyone—from households with leftovers after gatherings to restaurants, event organizers, and businesses with extra meals.
            Our goal is to make donating food as simple as sending a message. Through our platform, donors can easily upload food details, and people in need can view and request what's available near them
          </p>
        </section>

        <section className="why">
          <h3>Why We Started</h3>
          <p>
            Food waste is a silent crisis—millions of tons of food are thrown away every year, while countless people go to bed hungry.
            We started Meal Bridge after witnessing this imbalance in our own communities. We realized that with the help of technology and a strong sense of community, we could create a system that benefits both donors and recipients.

            Our platform is designed to be fast, free, and accessible. It’s not just about giving food—it's about building a culture of care, where people support each other in simple but meaningful ways.
            </p>
        </section>

        <section className="how">
          <h3>How It Works</h3>
          <p>
            Using Meal Bridge is simple and community-driven:
            <br /><br />
            <strong>For Donors:</strong><br />
            - Create a post with food details, quantity, pickup time, and contact info.<br />
            - Optionally upload a photo of the food.<br />
            - Share your donation with the community nearby.
            <br /><br />
            <strong>For Recipients:</strong><br />
            - Browse available food posts listed by local donors.<br />
            - Contact the donor directly using the provided details.<br />
            - Arrange a pickup time and collect the food.
            <br /><br />
          </p>

        </section>
      </div>
    </div>
  );
};

export default About;
