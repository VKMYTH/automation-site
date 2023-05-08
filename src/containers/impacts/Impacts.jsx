import React from 'react';
import Feature from '../../components/feature/Feature';
import './impacts.css';

const featuresData = [
  {
    title: 'Industrial Revolution',
    text: 'Increased efficiency and productivity in manufacturing through the use of machinery led to mass production and lower costs, but also displacement of workers and a shift to urbanization.',
  },
  {
    title: 'Digital Revolution',
    text: 'The internet has enabled people to share ideas and information like never before. This has led to the creation of a vast online knowledge base that allows anyone to access information on virtually any topic.',
  },
  {
    title: 'Transportation Revolution',
    text: 'Automation of transportation systems has increased speed and accessibility, but also led to environmental challenges, congestion, and safety concerns.',
  },
  {
    title: 'Service Sector Revolution',
    text: 'Automation of service sector jobs such as banking, retail, and customer service has led to increased efficiency and convenience, but also resulted in the loss of jobs and a shift in the nature of work.',
  },
];

const Impacts = () => (
  <div className="gpt3__features section__padding" id="impacts">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Let's Explore the Impacts Automation has had on society from 1900-present.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Impacts;
