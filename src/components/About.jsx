import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="about" ref="about">
        <h1>About Me</h1>
        <div className="">
          Hey my name is Kenneth Santarosa and I am currently a 3rd year informatics student 
          at the Univeristy of California Irvine. My career goals is to be a full-stack web
          developer in a professional setting. Currently I am a intern at <a>The Portal</a>
          where along with other students, I am helping to develop web applications for real 
          clients.
          I also have hobbies.
        </div>
        <div className="about-portfolio-picture">
          <img src="" alt="" />
        </div>
      </section>
    );
  }
}

export default About;
