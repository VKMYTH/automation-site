import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatComp.css';

const WhatComp = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wauto">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Automation?" text="Automation refers to the use of technology to automate or streamline manual or repetitive tasks, reducing the need for human intervention. This can be accomplished through the use of software, robotics, and other forms of digital technology. Automation can increase efficiency, productivity, and accuracy, while also reducing costs and errors." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="src/components/navbar#blog">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Process Automation" text="The automation of business processes using software applications, allowing for the seamless execution of tasks across different systems and departments without the need for human intervention. This can result in increased efficiency and accuracy, as well as reduced costs and errors." />
      <Feature title="Robotics Automation" text="The use of robotic technology to automate manufacturing, assembly, and other industrial processes. This can increase production speed and efficiency, reduce labor costs, and improve product quality and consistency." />
      <Feature title="Cognitive Automation" text="The use of artificial intelligence and machine learning algorithms to automate complex decision-making processes, such as data analysis, customer service, and financial forecasting. This can improve accuracy and speed, while also freeing up human workers to focus on higher-level tasks." />
    </div>
  </div>
);

export default WhatComp;
