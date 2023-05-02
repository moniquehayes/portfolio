import React from "react";

const Work = () => {
  return (
    <>
      <h1 style={{textAlign: 'center', color: '#70a0af'}}>Work</h1>
      <main style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{border: '2px solid #9f8082', backgroundColor: 'white', borderRadius: '6px', margin: '5px', padding: '3px', width: '20rem', position :'relative', paddingBottom: '5vh'}}>
          <h2 style={{textAlign: 'center', color: '#9f8082'}}>Yummify</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="yummify.png" style={{width: '18rem'}}/>
          </div>
          <div style={{textAlign: 'center'}}>
          <a href="https://www.youtube.com/watch?v=K3fjTKBAuxE" style={{textDecoration: 'none', color: '#003249'}}>Watch demo</a>
          </div>
          <p style={{color: '#292f36', padding: '3px', textAlign: 'center'}}>
            A full stack application which works to reduce food waste by
            providing an avenue for restaurants to sell their unsold meals
            and/or items for discounted prices to consumers. Key technologies
            used in development include Node.js, React, JavaScript, Firebase,
            Redux, Bootstrap, Webpack, GoogleMapsAPI
          </p>
          <div style={{position: 'absolute', bottom: '5px', height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <a href="https://yummify-352b4.web.app/" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View Site</p></a>
          <a href="https://github.com/yummify/yummify" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View on Github</p></a>
          </div>
        </div>
        <div style={{border: '2px solid #9f8082', backgroundColor: 'white', borderRadius: '6px', margin: '5px', padding: '3px', width: '20rem', position :'relative', paddingBottom: '5vh'}}>
          <h2 style={{textAlign: 'center', color: '#9f8082'}}>Pick me UP</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="pickmeup.png" style={{width: '18rem'}}/>
          </div>
          <p style={{color: '#292f36', padding: '3px', textAlign: 'center'}}>
            A frontend site that generates inspirational quotes for users,
            utilizing 34 different categories with up to 10 quotes within each
            category. Key technologies used in development include React,
            JavaScript, Node.js, HTML5, CSS3
          </p>
          <div style={{position: 'absolute', bottom: '5px', height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <a href="https://moniquehayes.github.io/stackathon2/" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View Site</p></a>
          <a href="https://github.com/moniquehayes/stackathon2" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View on Github</p></a>
          </div>
        </div>
        <div style={{border: '2px solid #9f8082', backgroundColor: 'white', borderRadius: '6px', margin: '5px', padding: '3px', width: '20rem', position :'relative', paddingBottom: '5vh'}}>
          <h2 style={{textAlign: 'center', color: '#9f8082'}}>Wild Roots</h2>
          <div style={{width: '20rem', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
              <img src="wildroots.png" style={{width: '18rem'}}/>
          </div>
          <p style={{color: '#292f36', padding: '3px', textAlign: 'center'}}>
            A full stack ecommerce site for plants utilizing Node.js, React,
            Redux, JavaScript, React Bootstrap, Stripe, Express, Webpack, and
            Sequelize
          </p>
          <div style={{position: 'absolute', bottom: '5px', height: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <a href="https://wild-roots.onrender.com/products" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View Site</p></a>
          <a href="https://github.com/The-Shopperettes/grace-shopper" target="_blank" style={{textDecoration: 'none', color: '#9f8082', width: '7rem', backgroundColor: '#eddea4', textAlign: 'center', border: '1px solid #9f8082', borderRadius: '4px', margin: '0 1.5rem'}}><p>View on Github</p></a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
