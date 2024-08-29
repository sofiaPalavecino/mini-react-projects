import React from 'react';
import './Hero.scss';

const Hero = () => (
  <section className="hero">
    <img src="/hero.png" alt="" />
    <h1 className='hero__title'>Online Experiences</h1>
    <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
    </p>
  </section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
