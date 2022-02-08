import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingPage.css';
import { withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="dflex text-white text-center height bg">
        <div className="container mx-auto p-3">
          <div className="mb-auto">
            <Navbar expand="md" dark>
              <NavbarBrand href="/" className="mt-3">
                <h3>The Games</h3>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse className="white-bg" isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto nav-masthead" navbar>
                  <NavItem>
                    <NavLink href="/login" className="mx-2" active>
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Register" className="ml-2" active>
                      Register
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <main className="px-3 mx-auto main-landingpage">
            <h1>Play Your Games</h1>
            <p className="lead words">Here are the best online games to play with friends and family, guaranteed to bring your clan together. See the best multiplayer online games to keep you entertained.</p>
            <p className="lead">
              <a href="/home" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                Play Games
              </a>
            </p>
          </main>

          <footer className="mt-auto text-white-50">
            <p>
              Full Stack Web Developer{' '}
              <a href="#" className="text-white">
                Rock, Paper and Scissor
              </a>
              , by{' '}
              <a href="#" className="text-white">
                @Kelompok2
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
