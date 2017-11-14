import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <section className="experience blue-light">
        <h1>Experience</h1>
        <div className="work">
          <span>Past</span>
          <img src="" alt="level-2-designs"/>
          <div>
            My first real web develpement work experience took place in Level 2 designs. 
            Level 2 designs is a company in katella which offers solutions.
            My experience was of working with platforms such as wordpress and shopify.
            Often my tasks were to make changes to exsisting code or add new sections.
            HTML, CSS, and responsive design were the technologies I used.
          </div>
          <span>

          </span>
        </div>
        <div className="work">
          <span>Current</span>
          <img src="" alt="the-portal"/>
          <div>
            The Portal is were I am currently working at. The portal's training program
            taught me how to use javascript front-end libraries like jquery and the use of
            AJAX. We also used node, express, mongoose, and mongoDB for the backend of training.
            The three weeks of training revolved around recreating Prello as practice for both
            front-end and back-end development work. Currently I am on the portal's team helping
            to develop websites for clients and some internal web work.
          </div>
          <span>

          </span>
        </div>
        <div className="skills">

        </div>
      </section>
    );
  }
}

export default Experience;
