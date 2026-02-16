import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <div className="home__introduction">
            <h1 className="home__title">Hi, I'm Cloyd</h1>
            <h3 className="home__subtitle">Application Developer</h3>
            <p className="home__description">I create cross-platform apps for Android and iOS. I also have experience in ERP systems development.</p>
            <a href="#contact" className="button button--flex">Contact Me</a>
          </div>
          <div className="home__img"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;