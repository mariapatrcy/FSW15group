import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Axios from 'axios';
import styles from "../navbar/navbargame.module.css"
import { withRouter } from "react-router-dom";

class Navbargame extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      loginStatus: false
    }
  }

  componentDidMount() {
    this.userAuthenticated();
  }

  userAuthenticated = () => {

    if (!localStorage.getItem("token")) {
      this.setState({ loginStatus: false });
    } else {
      const config = {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }
      Axios.get("auth/whoami", config)
        .then((res) => {
          if (!res.data) {
            this.setState({ loginStatus: false });
          } else {
            //condition when success
            this.setState({ loginStatus: true });
            this.setState({ username: res.data.username })
          }
        })
        .catch((err) => {
          this.props.history.push('/home');
        })
    }
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ loginStatus: false })
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className={styles.colorFont}>
        <Navbar className={styles.navbarComponent} color="dark" dark expand="md" >
          <NavbarBrand href="/home" className={styles.titleWeb}>
            GAMES AREA
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <div className={styles.optionNavbar}>
            <Nav className={styles.navbarText} navbar >
              <NavItem>
                <NavLink href="/home" >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/game-list">
                  Game List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/category">
                  Categories
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              {
                this.state.loginStatus ?
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Hi, {this.state.username}
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem href='/profile'>
                        Profile
                      </DropdownItem>
                      <DropdownItem href='/edit-profile'>
                        Edit Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.logout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  :
                  <NavItem>
                    <NavLink href="/login">
                      Login
                    </NavLink>
                  </NavItem>
              }
            </Nav>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Navbargame);