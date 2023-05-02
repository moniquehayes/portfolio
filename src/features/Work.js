import React from "react";

const Work = () => {
  return (
    <>
      <h1 style={{textAlign: 'center', color: '#70a0af'}}>Work</h1>
      {/**MAYBE USE BOOTSTRAP CAROUSEL HERE?!?! */}
      {/* <main className="flex flex-wrap mx-auto"> */}
      <main style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Yummify</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="yummify.png" style={{width: '18rem'}}/>
          </div>
          <div style={{textAlign: 'center', margin: '3px,'}}>
          <a href="https://www.youtube.com/watch?v=K3fjTKBAuxE">Watch demo</a>
          </div>
          <p>
            A full stack application which works to reduce food waste by
            providing an avenue for restaurants to sell their unsold meals
            and/or items for discounted prices to consumers. Key technologies
            used in development include Node.js, React, JavaScript, Firebase,
            Redux, Bootstrap, Webpack, GoogleMapsAPI
          </p>
          <a href="https://yummify-352b4.web.app/" target="_blank"><p>View Site</p></a>
          <a href="https://github.com/yummify/yummify" target="_blank"><p>View on Github</p></a>
        </div>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Pick me UP</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="pickmeup.png" style={{width: '18rem'}}/>
          </div>
          <p>
            A frontend site that generates inspirational quotes for users,
            utilizing 34 different categories with up to 10 quotes within each
            category. Key technologies used in development include React,
            JavaScript, Node.js, HTML5, CSS3
          </p>
          <a href="https://moniquehayes.github.io/stackathon2/" target="_blank"><p>View Site</p></a>
          <a href="https://github.com/moniquehayes/stackathon2" target="_blank"><p>View on Github</p></a>
        </div>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Wild Roots</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="wildroots.png" style={{width: '18rem'}}/>
          </div>
          <p>
            A full stack ecommerce site for plants utilizing Node.js, React,
            Redux, JavaScript, React Bootstrap, Stripe, Express, Webpack, and
            Sequelize
          </p>
          <a href="https://wild-roots.onrender.com/products" target="_blank"><p>View Site</p></a>
          <a href="https://github.com/The-Shopperettes/grace-shopper" target="_blank"><p>View on Github</p></a>
        </div>
      </main>
    </>
  );
};

export default Work;
