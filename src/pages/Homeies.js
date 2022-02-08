import React from "react";
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navbargame from './navbar/Navbargame'

class Homeies extends React.Component {

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
          this.setState({ username: res.data.username });
        }
      })
      .catch((err) => {
        this.props.history.push('/login');
      })
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ loginStatus: false });
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <div>
          <Navbargame
            username={this.state.username}
          />
        </div>
        <div>
          {
            this.state.loginStatus ?
              <div>
                <h1 >You authenticated {this.state.username}</h1>
                <button onClick={this.logout}>logout</button>

              </div>
              :
              <div>
                <button onClick={this.userAuthenticated}>Auth</button>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Homeies);