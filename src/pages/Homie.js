import React, { useState, useEffect } from 'react'
// import styles from '../pages/login/LoginForm.module.css';
import Axios from 'axios'
import { useHistory, withRouter } from 'react-router';


const Homie = () => {

  const [username, setUsername] = useState("");
  const [loginStatus, setLoginStatus] = useState(false)

  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      userAuthenticated();
    } else {
      // history.push('/login');
      console.log('home')
    }
  }, [])

  const userAuthenticated = () => {
    Axios.get("auth/whoami", {
      headers: {
        "Authorization": token
      }
    })
      .then((res) => {
        if (!res.data) {
          setLoginStatus(false);
        } else {
          //condition when success
          setLoginStatus(true);
          setUsername(res.data.username);
        }
        // console.log(res)
      })
      .catch((err) => {
        history.push('/login');
      })
  }

  const logout = () => {
    localStorage.removeItem("token");
    setLoginStatus(false);
    history.push('/login');
  }

  const login = () => {
    history.push('/login');
  }

  return (
    <div>
      {
        loginStatus ?
          <div>
            <h1 >You authenticated {username}</h1>
            <button onClick={logout}>logout</button>
          </div>
          :
          <div>
            <h1>You are not authenticated, please login</h1>
            <button onClick={login}>Login</button>
          </div>
      }
    </div>
  )
}

export default withRouter(Homie);
