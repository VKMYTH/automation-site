import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore More on the Automation</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Nov 17, 2022" text="How Intelligent Automation Will Change The Way We Work - Computer World"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="February 15, 2023" text="How Will Automation Impact Our Lives? - GCFGlobal" />
        <Article imgUrl={blog03} date="April 7, 2021" text="The Rise in Automation - WEC" />
        <Article imgUrl={blog04} date="January 19, 2022" text="Understanding the Impact of Automation on Workers, Jobs, and Wages - Brookings" />
        <Article imgUrl={blog05} date="April 26, 2022" text="The Evolution of Automation - Progressive Automations" />
      </div>
    </div>
  </div>
);

export default Blog;
