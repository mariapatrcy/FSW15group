import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { Button, CardTitle, Form, FormGroup } from 'reactstrap';
import styles from '../register/register.module.css'
import { MdCopyright } from 'react-icons/md';
import Axios from 'axios'
import { useHistory } from 'react-router';

const Register = () => {

  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory();

  const register = (event) => {
    Axios.post("auth/register", {
      fullname: fullname,
      username: username,
      password: password,
      email: email,
      age: age
    })
      .then((response) => {
        console.log(response)
        history.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.registerCard}>
        <div>
          <CardTitle className={styles.registerTitle}>Register</CardTitle>
          <Form>
            <FormGroup className={styles.formGroup}>
              <FormControl
                className={styles.formInput}
                type="text"
                placeholder="Fullname"
                name="fullname"
                id="fullname"
                onChange={(e) => { setFullname(e.target.value) }} />
              <FormControl
                className={styles.formInput}
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                onChange={(e) => { setUsername(e.target.value) }} />
              <FormControl
                className={styles.formInput}
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={(e) => { setEmail(e.target.value) }} />
              <FormControl
                className={styles.formInput}
                type="number"
                placeholder="Age"
                name="age"
                id="age"
                onChange={(e) => { setAge(e.target.value) }} />
              <FormControl
                className={styles.formInput}
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }} />
            </FormGroup>
            <Button className={styles.registerButton} type="submit" onClick={register}>REGISTER</Button>
            <div className={styles.signinRegister}>
              Have an account? <a className={styles.textLinkFooter} href="/login">Sign In</a>
            </div>
            <div className={styles.border}></div>
            <button className={styles.registerButtonGoogle} type="button">SIGN UP WITH GOOGLE</button>
            <div className={styles.copyrightRegister}>
              <MdCopyright />  2021 - 2022
            </div>
          </Form>
        </div>
      </div>
    </div >
  )
}

export default Register
