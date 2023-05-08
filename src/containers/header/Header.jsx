import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Learn About the Impacts of Automation on Society</h1>
      <p>Welcome to our website dedicated to exploring the impact of automation technology from 1900 to the present day. Throughout history, automation has revolutionized industries, transformed the workplace, and brought about unprecedented levels of productivity. Join us as we delve into the past, present, and future of automation, examining its benefits, challenges, and implications for society and the economy.</p>

      <div className="gpt3__header-content__input">
        <button type="button">Get Started Below</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
