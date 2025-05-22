// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2>Agenda of the project</h2>
//       <p>Brief intro --&gt; 2 lines</p>
//       <div className="bg-image-placeholder">Background image</div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-bg">    {/* Background wrapper */}
      <div className="home-container">
        <div className="content">
          <h2 className="main-heading">
            Meal - Bridge: Your extra meal can be someone’s only meal.
          </h2>

          <p className="poem">
            Share a meal, not the waste<br />
            Feed a life with gentle grace.<br />
            From giver to seeker, hand in hand,<br />
            Meal Bridge rises across the land.
          </p>

          <p>
            "Hey there! If you’ve cooked a little extra or have some good food you don’t want to go to waste, why not share it? There are people nearby who could really use a meal right now. Just post what you have—it only takes a minute. Your simple act could fill an empty stomach and bring a smile to someone’s face."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

