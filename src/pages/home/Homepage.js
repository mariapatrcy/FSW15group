import React from "react";
import styles from "../home/homepage.module.css"
import { UncontrolledCarousel } from "reactstrap"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup, CarouselCaption } from "reactstrap";
import Navbargame from "../navbar/Navbargame";

class Homepage extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.body}>
        <Navbargame />
        <div>

          <UncontrolledCarousel className={styles.carouselHome}
            items={[
              {
                src: 'https://us.v-cdn.net/6030983/uploads/CPL6S5P5WBRK/85805c24-107a-46e9-91a2-34286a5b6e01.png'

              },
              {
                src: 'https://img.freepik.com/free-vector/vector-cartoon…hand-gestures-set_221648-185.jpg?size=626&ext=jpg'
              },
              {
                src: 'https://picsum.photos/id/678/1200/600'
              }
            ]}
          />
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://cdn.antaranews.com/cache/730x487/2020/03/05/HP_KeyArtPressRelease-1_1.png"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Harry Potter (Harry Potter: Hogwarts Mystery)
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  9.5/10
                </CardSubtitle>
                <CardText>
                  Harry Potter: Hogwarts Mystery is the first game in which players can create their own
                  character
                  and experience life as a Hogwarts student. The game will launch under Portkey Games, from
                  Warner
                  Bros. Interactive Entertainment, the games label dedicated to creating new Wizarding World
                  mobile and video game experiences.
                </CardText>
                <Button>
                  Play Game
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/17/2435579786.jpg"
                top
                width="100%"
                height="49%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  The Chronicles of Narnia: The Lion, the Witch and the Wardrobe
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  8.5/10
                </CardSubtitle>
                <CardText>
                  The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (video game) ... The Chronicles
                  of Narnia: The Lion, the Witch and the Wardrobe is an action-adventure game released in 2005
                  by Traveller's Tales. The game is based on the novel-adapted movie of the same name.
                </CardText>
                <Button>
                  Play Game
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://www.patinews.com/wp-content/uploads/2021/03/Point-Blank.jpg"
                top
                width="100%"
                height="49%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Point Blank Beyond Limits
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  7.5/10
                </CardSubtitle>
                <CardText>
                  Point Blank adalah sebuah permainan komputer ber-genre FPS yang dimainkan secara
                  online/offline.
                  Permainan ini dikembangkan oleh Zepetto dari Korea Selatan dan dipublikasikan oleh Zepetto.
                </CardText>
                <Button>
                  Play Game
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        <div>
          <div>
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                  Join Us!
                </CardTitle>
                <CardText>
                  Game Gaming adalah wadah game peramban yang menampilkan permainan online gratis terbaik.Semua permainan
                  kami berjalan di peramban dan dapat dimainkan secara instan tanpa pengunduhan atau pemasangan.
                  Instagram : @gamegaming
                  Facebook : gamegaming
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;