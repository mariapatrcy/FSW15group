import React from 'react'
import { FormControl, FormCheck } from 'react-bootstrap';
import { CardTitle, Form, FormGroup } from 'reactstrap';
import styles from '../login/Login.module.css'
import { MdCopyright } from 'react-icons/md';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      loginStatus: false
    }
  }


  usernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    event.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    }

    const checkToken = (data) => {
      if (data === "Wrong password!") {
        this.props.history.push('/login')
        alert(data)
      } else {
        this.props.history.push('/login')
        alert(data)
      }
    }

    Axios.post("auth/login", data)
      .then((res) => {
        if (!res.data) {
          this.setState({ loginStatus: false });
          console.log("Silahkan login")
        } else {
          if (res.data.username) {
            this.setState({ loginStatus: true });
            localStorage.setItem('token', "Bearer " + res.data.accessToken);
            this.props.history.push('/home');
          } else {
            checkToken(res.data);
          }
        }
      }).catch((err) => {
        this.props.history.push('/login')
      });

  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div>
            <CardTitle className={styles.loginTitle}>Login</CardTitle>
            <Form>
              <FormGroup>
                <FormControl
                  className={styles.formInput}
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  onChange={this.usernameHandler}
                />
                <FormControl
                  className={styles.formInput}
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={this.passwordHandler}
                />
              </FormGroup>
              <div className={styles.textAdditional}>
                <FormCheck type="checkbox" label="Remember me" />
                <a className={styles.textLink} href="/">Forgot password?</a>
              </div>
              <button className={styles.loginButton} type="submit" onClick={this.login}>LOGIN</button>
              <div className={styles.border}></div>
              <button className={styles.loginButtonGoogle} type="button">SIGN UP WITH GOOGLE</button>
              <div className={styles.footerLogin}>
                Dont't have an account? <a className={styles.textLinkFooter} href="/register">Sign up here</a>
              </div>
              <div className={styles.copyrightLogin}>
                <MdCopyright />  2021 - 2022
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);