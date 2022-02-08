//  import react, component, dan fragment dari react
import React, { Component, Fragment, useState } from "react";

// import icon
import { Icon } from '@iconify/react';

// import img logo
import logo from './img/logo1.png';
// import img batu
import batu from './img/batu.png';
// import img gunting
import gunting from './img/gunting.png';
// import img kertas
import kertas from './img/kertas.png';
// import img refresh
import refresh from './img/refresh.png';
// import script
import script from './js/game.js';
// import axios
import Axios from 'axios'
// import css module game-detail.module.css
import style from './game-rock_paper_scissors.module.css';

const Game = () => {


  const token = localStorage.getItem("token");


  const handleOnClickBatu = () => {
    Axios.post('game/rockpepsis',
      { userSelect: 0 },
      { headers: { "Authorization": token } }
    )
      .then((res) => {
        console.log(res.json)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className={style.games}>
        <div className={style.top}>
          <div className={style.atascontent}>
            <a href="/game-detail-rps"><Icon icon="eva:arrow-ios-back-fill" style={{ color: '#724C21' }} /></a>
            <div className={style.gameslogo}><img src={logo}></img></div>
            <div className={style.gamesname}><span>ROCK PAPER SCISSORS</span></div>
          </div>

        </div>


        <div className={style.contentgames}>
          <div className={style.container}>
            <div className={style.games1}>

              <span className={style.namaplayer}>PLAYER 1</span>

              <div id={style.batu} type='button' onClick={handleOnClickBatu}>
                <img src={batu}></img>
              </div>
              <div id={style.kertas} >
                <img src={kertas}></img>
              </div>

              <div id={style.gunting}>
                <img src={gunting}></img>
              </div>

            </div>


            <div className={style.middle}>
              <div className={style.score}>
                <span>SCORE </span>
                <br></br>
                <span id={style.playerScore}>0</span><span>:</span><span id={style.computerScore}>0</span>
                <br></br>
              </div>


              <div className={style.VS}>
                <span id={style.VS}>VS</span>
              </div>

            </div>



            <div className={style.games2}>
              <span className={style.namaplayer}>COM</span>

              <div id={style.batuCom}>
                <img src={batu}></img>
              </div>

              <div id={style.kertasCom}>
                <img src={kertas}></img>
              </div>

              <div id={style.guntingCom}>
                <img src={gunting}></img>
              </div>

            </div>


          </div>
        </div>

        <div className={style.bottom}>

          {/* reload page */}
          <a href="" className={style.continue}><img id={style.refresh} src={refresh}></img></a>


        </div>

      </div>

      {/* <script src={script}></script> */}
    </div>
  )
}


export default Game;