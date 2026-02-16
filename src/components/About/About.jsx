import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            I am a dedicated Application Developer and Full-Stack Developer based in Tarlac City, Philippines, with a B.S. in Computer Engineering from AMA Computer College. Specializing in mobile app development, API structuring, third-party integrations, and ERP systems, I have over four years of experience across roles at 3XPO, KPI Business Advisors, Whizsof Technologies, and BUNN Asia-Pacific. Proficient in technologies like Firebase, Supabase and SQL databases, I excel in functional planning, team coordination, and deploying cross-platform apps with features such as push notifications, real-time messaging, and payment gateways. Passionate about innovative solutions, I combine technical expertise with strong problem-solving skills to deliver efficient, user-focused projects.
          </p>
          {/* Add more personal info or image here */}
        </div>
      </div>
    </section>
  );
};

export default About;