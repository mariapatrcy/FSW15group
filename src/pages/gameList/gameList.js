import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameList.css';
import '../landing-page/landingPage.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from './img-game/game-1.jpg';
import gambar2 from './img-game/game-2.jpg';
import gambar3 from './img-game/game-3.jpg';
import gambar4 from './img-game/game-4.jpg';
import gambar5 from './img-game/game-5.jpg';
import gambar7 from './img-game/game-7.jpg';

import { Card, CardBody, CardTitle, CardImg, CardLink } from 'reactstrap';
import Navbargame from '../navbar/Navbargame';

class GameList extends React.Component {
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
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,

          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div>
        <Navbargame />
        <div className="dflex text-white text-center height bg">
          <div className="container mx-auto p-3">
            <main className="px-3 main-gamelist">
              <div>
                <h2 className="mb-4">Choose Your Games</h2>
                <Slider {...settings}>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="/game-detail-rps">
                        <CardImg
                          alt="Card image cap"
                          src={gambar1}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Rock Paper Scissor
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="#">
                        <CardImg
                          alt="Card image cap"
                          src={gambar2}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Candy Crush
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="#">
                        <CardImg
                          alt="Card image cap"
                          src={gambar3}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Angry Birds
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="#">
                        <CardImg
                          alt="Card image cap"
                          src={gambar4}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Plants vs Zombies
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="#">
                        <CardImg
                          alt="Card image cap"
                          src={gambar5}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Family Farm Seaside
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                  <div>
                    <Card className='cardOne'>
                      <CardLink href="#">
                        <CardImg
                          alt="Card image cap"
                          src={gambar7}
                          width="100%"
                        />
                      </CardLink>
                      <CardBody>
                        <CardTitle tag="h5">
                          Pirate Kings
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                </Slider>
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

export default GameList;