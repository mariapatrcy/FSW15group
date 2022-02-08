import React, { Component } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../landing-page/landingPage.css';
import './profile.css';

import { Label, Card, CardBody, CardTitle, CardImg, Button, Input } from 'reactstrap';
import Navbargame from '../navbar/Navbargame';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fullname: null,
      email: null,
      age: null
    };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.myProfile();
  }

  myProfile = () => {
    const config = {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }
    Axios.get("data/myprofile", config)
      .then((res) => {
        this.setState({fullname: res.data.fullname});
        this.setState({email: res.data.email});
        this.setState({age: res.data.age});
      })
      .catch((err) => {
        this.props.history.push('/login');
      })
  }

  editProfile = () => {
    const config = {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }
    const bodyParams = {
      fullname: this.state.fullname,
      email: this.state.email,
      age: this.state.age
    }
    Axios.post("data/updatemyprofile", bodyParams, config)
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/profile');
      })
      .catch((err) => {
        this.props.history.push('/edit-profile');
      })
  }  

  render() {

    return (
      <div>
        <Navbargame />
        <div className="dflex text-white text-center height bg">
          <div className="container mx-auto p-3">

            <main className="px-3 main-profile">
              <div>
                <h2 className="mb-4">Edit User Profile</h2>

                <div>
                  <Card className='cardTwo'>
                    <CardImg
                      alt="Card image cap"
                      src="https://www.nps.k12.nj.us/laf/wp-content/uploads/sites/77/bb-plugin/cache/istockphoto-1209654046-612x612-1-landscape.jpeg"
                      top
                      width="48%"
                    />
                    <CardBody className="profile-body">
                      <CardTitle tag="h4" className="cardEdit">
                        <Label
                          className="me-sm-2"
                          for="exampleFullName"
                        >
                          Full Name :
                        </Label>
                        <Input
                          id="exampleFullName"
                          name="fullName"
                          placeholder="pesonal full name"
                          value={this.state.fullname}
                          onChange={(e) => {this.setState({fullname: e.target.value})}}
                        />
                      </CardTitle>
                      <CardTitle tag="h4" className="cardEdit">
                        <Label
                          className="me-sm-2"
                          for="exampleEmail"
                        >
                          Email :
                        </Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="something@idk.cool"
                          type="email"
                          value={this.state.email}
                          onChange={(e) => {this.setState({email: e.target.value})}}
                        />
                      </CardTitle>
                      <CardTitle tag="h4" className="cardEdit">
                        <Label
                          className="me-sm-2"
                          for="exampleAge"
                        >
                          Age :
                        </Label>
                        <Input
                          id="exampleAge"
                          name="age"
                          placeholder="your age"
                          value={this.state.age}
                          onChange={(e) => {this.setState({age: e.target.value})}}
                        />
                      </CardTitle>
                      <Button color="secondary text-white" type="submit" onClick={this.editProfile}>
                        Submit
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
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
      </div>
    );
  }
}

export default EditProfile;
