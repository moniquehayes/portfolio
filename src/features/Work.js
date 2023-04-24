import React from "react";

const Work = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Work</h1>
      {/* <main className="flex flex-wrap mx-auto"> */}
      <main style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Yummify</h2>

          <p>
            A full stack application which works to reduce food waste by
            providing an avenue for restaurants to sell their unsold meals
            and/or items for discounted prices to consumers. Key technologies
            used in development include Node.js, React, JavaScript, Firebase,
            Redux, Bootstrap, Webpack, GoogleMapsAPI
          </p>
        </div>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Pick me UP</h2>
          <p>
            A frontend site that generates inspirational quotes for users,
            utilizing 34 different categories with up to 10 quotes within each
            category. Key technologies used in development include React,
            JavaScript, Node.js, HTML5, CSS3
          </p>
        </div>
        <div style={{border: '1px solid lightgrey', margin: '5px', padding: '3px', width: '20rem'}}>
          <h2 style={{textAlign: 'center'}}>Wild Roots</h2>
          <p>
            A full stack ecommerce site for plants utilizing Node.js, React,
            Redux, JavaScript, React Bootstrap, Stripe, Express, Webpack, and
            Sequelize
          </p>
        </div>
      </main>
    </>
  );
};

export default Work;
