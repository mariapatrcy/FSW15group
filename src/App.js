import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Game_Detail from "./pages/game-detail/Game_detail";
import LandingPage from "./pages/landing-page/landingPage";
// import Homie from "./pages/Homie";
// import Homeies from "./pages/Homeies";
import Login from "./pages/login/Login";
import GameList from "./pages/gameList/gameList";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Homepage";
import EditProfile from './pages/profile/editProfile';
import GameRPS from './pages/game-rock_paper_scissors/game-rock_paper_scissors'
import 'bootstrap/dist/css/bootstrap.min.css';
// <<<<<<< HEAD
// import Homepage from "./pages/homepage/index";
// import GameDetail from "./pages/game-detail/Game_detail"
import Homepage from "./pages/homepage/Home";
// =======
// >>>>>>> cb71404611e496f3f3b8a0e1bbff3e14bb2c1f88

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/game-detail-rps" component={Game_Detail} />
        <Route exact path="/game-list" component={GameList} />
        {/* <Route exact path="/homie" component={Homie} /> */}
        <Route exact path="/homepage" component={Homepage}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/game-rock-paper-scissor" component={GameRPS} />
      </Switch >
    </Router >
  );
}

export default App;
