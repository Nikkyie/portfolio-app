import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <h3 className="services__title">Web Development</h3>
          <p className="services__description">
            I build responsive and performant websites tailored to your needs.
          </p>
        </div>
        {/* Add more services */}
      </div>
    </section>
  );
};

export default Services;