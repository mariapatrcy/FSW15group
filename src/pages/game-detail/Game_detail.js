//  import react, component, dan fragment dari react
import React, { Component, Fragment } from "react";

//  import jumbotron button, dkk dari react-bootrstrap untuk menjalankan jumbotron dkk.
import { Button, Container, Card } from 'react-bootstrap';

// import icon
import { Icon } from '@iconify/react';

// import css module game-detail.module.css
import style from './game_detail.module.css';

import Navbargame from "../navbar/Navbargame";
class Game_Detail extends Component {
  render() {
    return (
      <Fragment>
        <Navbargame />
        <div fluid className={style.jumbotron}>
          <div className={style.divjumbotron}>
            <Container fluid='lg' className={style.container}>

              <Button href="/game-rock-paper-scissor" variant="primary"><Icon icon="carbon:game-console" style={{ fontSize: '40px' }} /></Button>
            </Container>
          </div>
        </div>

        {/* Footer */}
        <div className={style.footer}>


          <Card className={style.div1}>
            <Card.Header><h4>Nama Game: Gunting Kertas Batu</h4></Card.Header>
            <Card.Body className={style.cardbodykiri}>
              <div >
                <p className={style.p}>Game Description: lorem ipsum</p>
              </div>
              <div>
                <p className={style.p}>Release Date: xxx - xxx</p>
              </div>
              <div>
                <p className={style.p}> Developer: xxx - xxx</p>
              </div>
              <div className={style.kotakrating}>
                <p className={style.p}>Rating</p>
                <Icon className={style.iconstar} icon="ant-design:star-filled" style={{ fontSize: '30px' }} />
                <Icon className={style.iconstar} icon="ant-design:star-filled" style={{ fontSize: '30px' }} />
                <Icon className={style.iconstar} icon="ant-design:star-filled" style={{ fontSize: '30px' }} />
                <Icon className={style.iconstar} icon="ant-design:star-outlined" style={{ fontSize: '30px' }} />
                <Icon className={style.iconstar} icon="ant-design:star-outlined" style={{ fontSize: '30px' }} />
              </div>

            </Card.Body>
          </Card>



          <Card className={style.leaderboard}>
            <center>
              <Card.Header><h5>Leaderboard</h5></Card.Header>
            </center>

            <Card.Body className={style.cardbodykanan}>

              <div className={style.kotakatas}>
                <div>
                  <p className={style.p}>Peringkat</p>
                </div>
                <div>
                  <p className={style.pfoto}></p>
                </div>
                <div>
                  <p className={style.p}>Nama</p>
                </div>
                <div>
                  <p className={style.p}>Points</p>
                </div>

              </div>
              <div className={style.kotak}>
                <div className={style.iconperingkat1}>
                  <Icon icon="la:award" style={{ fontSize: '50px' }} />
                </div>
                <div className={style.iconperson} >
                  <Icon icon="bi:person-circle" style={{ fontSize: '40px' }} />
                </div>
                <div>
                  <p className={style.p}>ABC</p>
                </div>
                <div>
                  <p className={style.p}>200</p>
                </div>

              </div>
              <div className={style.kotak}>
                <div className={style.iconperingkat2}>
                  <Icon icon="la:award" style={{ fontSize: '50px' }} />
                </div>
                <div className={style.iconperson} >
                  <Icon icon="bi:person-circle" style={{ fontSize: '40px' }} />
                </div>
                <div>
                  <p className={style.p}>ABC</p>
                </div>
                <div>
                  <p className={style.p}>200</p>
                </div>
              </div>

              <div className={style.kotak}>
                <div className={style.iconperingkat3}>
                  <Icon icon="la:award" style={{ fontSize: '50px' }} />
                </div>
                <div className={style.iconperson} >
                  <Icon icon="bi:person-circle" style={{ fontSize: '40px' }} />
                </div>
                <div>
                  <p className={style.p}>ABC</p>
                </div>
                <div>
                  <p className={style.p}>200</p>
                </div>
              </div>
              <div className={style.kotak}>

                <div className={style.iconperingkat4}>

                </div>
                <div className={style.iconperson} >
                  <Icon icon="bi:person-circle" style={{ fontSize: '40px' }} />
                </div>
                <div>
                  <p className={style.p}>ABC</p>
                </div>
                <div>
                  <p className={style.p}>200</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>

      </Fragment>
    )
  }
}

export default Game_Detail;