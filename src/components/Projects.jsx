import React, { Component } from 'react';
import Modal from './Modal';

const addUserToBoardSrc = require('../images/add-user-to-board.png');
const boardSrc = require('../images/board.png');
const boardsDropdownSrc = require('../images/boards-dropdown.png');
const boardsSharedWithMeSrc = require('../images/boards-shared-with-me.png');
const boardsSrc = require('../images/boards.png');
const forgotPasswordSrc = require('../images/forgot-password.png');
const menuSrc = require('../images/menu.png');
const loginSrc = require('../images/login.png');
const modalTitleSrc = require('../images/modal-title.png');
const modalLabelsSrc = require('../images/modal-labels.png');
const modalCommentsSrc = require('../images/modal-comments.png');
const resetPasswordSrc = require('../images/reset-password.png');

class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loginModalOpen: false,
      boardsModalOpen: false,
      boardModalOpen: false,
      cardModalOpen: false,
    }
  }

  toggleModal = modalName => {
    this.setState({
      [modalName]: !this.state[modalName],
    });
  }

  render() {
    const addUserToBoardImg = <img
      src={addUserToBoardSrc}
      alt="add user to board image"
      className="img-view-icon"
    />;

    const boardImg = <img
      src={boardSrc}
      alt="board image"
      className="img-view-icon"
    />;

    const boardsDropdownImg = <img
      src={boardsDropdownSrc}
      alt="boards dropdown image"
      className="img-view-icon"
    />;

    const boardsSharedWithMeImg = <img
      src={boardsSharedWithMeSrc}
      alt="boards shared with me image"
      className="img-view-icon"
    />;
    
    const boardsImg = <img
      src={boardsSrc}
      alt="boards image"
      className="img-view-icon"
    />;

    const forgotPasswordImg = <img
      src={forgotPasswordSrc}
      alt="forgot password image"
      className="img-view-icon"
    />;

    const loginImg = <img
      src={loginSrc}
      alt="login image"
      className="img-view-icon"
    />;

    const menuImg = <img
      src={menuSrc}
      alt="menu image"
      className="img-view-icon"
    />;

    const modalTitleImg = <img
      src={modalTitleSrc}
      alt="Modal Title image"
      className="img-view-icon"
    />;
    
    const modalLabelsImg = <img
      src={modalLabelsSrc}
      alt="Modal Labels image"
      className="img-view-icon"
    />;

    const modalCommentsImg = <img
      src={modalCommentsSrc}
      alt="Modal Comments image"
      className="img-view-icon"
    />;

    const resetPasswordImg = <img
      src={resetPasswordSrc}
      alt="reset password image"
      className="img-view-icon"
    />;

    const loginModalConent =
    <div>
      {/* {loginImg} */}
      The create account forms use authentication in order to make sure a user inputs a
      a valid email address, and that both passwords match. Creating an account also
      decrypt's the users password in order to make sure backend admins cannot view
      their passwords as well as any potential hackers. The login form checks to see if
      the user exsits and if they do creates a sessions cookie which allows the user
      to use the website. Finally the login page has a forgot password icon that lets
      users change their password if they forgot their password.
    </div>
  
    return (
      <section className="projects blue-secondary">
        <h1>Projects: Prello</h1>
        <p>
          During training at the portal, I was tasked to recreate a smaller scale
          version of the website Trello under the project name Prello. Prello was the
          project that taught me a lot of the fundamental skills as a programmer including
          traversing and manipulating the DOM using javascript, using jquery to make ajax
          calls to our local server, creating session cookies, using socketio, using nodejs, 
          setting up the backend and routing with express, setting up mongodb on our local machines, 
          and setting up the models for mongodb using moongoose.
        </p>
          <div className="project-section" onClick={modalName => this.toggleModal("loginModalOpen")}>
            <h3>Login Page</h3>
            <div>
              {loginImg}
              <p>
                The create account forms use authentication in order to make sure a user inputs a
                a valid email address, and that both passwords match. Creating an account also
                decrypt's the users password in order to make sure backend admins cannot view
                their passwords as well as any potential hackers. The login form checks to see if
                the user exsits and if they do creates a sessions cookie which allows the user
                to use the website. Finally the login page has a forgot password icon that lets
                users change their password if they forgot their password.
              </p>
            </div>
            <div>
              {forgotPasswordImg}
              <p>Yes</p>
            </div>
            <div>
              {resetPasswordImg}
              <p>okay</p>
              </div>
          </div>
          <div className="project-section">
            <h3>Boards Page</h3>
            <div>
              {boardsImg}
              <p>okay</p>
            </div>
            <div>
              {boardsSharedWithMeImg}
              <p>okay</p>
            </div>
            <div>
              {boardsDropdownImg}
              <p>okay</p>
            </div>
          </div>
          <div className="project-section">
            <h3>Board Page</h3>
            <div>
              <p>okay</p>
            </div>
            <div>
              <p>okay</p>
            </div>
            <div>
              <p>okay</p>
            </div>
          </div>
          <div className="project-section">
            <h3>Card Modal</h3>
            <div>
              <p>okay</p>
            </div>
            <div>
              <p>okay</p>
            </div>
            <div>
              <p>okay</p>
            </div>
          </div>
      </section>
    );
  }
}

export default Projects;