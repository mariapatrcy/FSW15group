;<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="./index.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet"
  />
  <title>Game Online</title>
  {/*untuk membuat navigasi bar di atas*/}
  <nav className="navbar navbar-expand-lg navbar-light bg-light nav-style shadow-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img
          src="asset/logoicon.png"
          width={30}
          height={30}
          className="d-inline-block align-top"
          alt
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/*untuk membuat Home, Game List, Profile di sebelah kiri*/}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link ml-lg-5 px-lg-4 text-dark" href="#">
            HOME
          </a>
          <a className="nav-item nav-link text-dark" href="#">
            GAME LIST
          </a>
          <a className="nav-item nav-link text-dark" href="profile.html">
            PROFILE
          </a>
        </div>
        {/*untuk membuat nagivasi search bar dan logout di sebelah kanan*/}
        <div className="collapse navbar-collapse d-flex flex-lg-row-reverse">
          <div className="navbar-nav">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <a className="nav-item nav-link text-dark" href="/login">
              LOG IN
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div className="page-1">
    <div className="container-fluid">
      <div className="card-container">
        <div className="col-lg-11 cardBody">
          <div className="card shadow border-0">
            <div className="card-body">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          className="d-block headfoto mx-auto"
                          src="asset/narniakepake.jpg"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h2 className="subtitle-text">
                          The Chronicles of Narnia: The Lion, the Witch and the
                          Wardrobe
                        </h2>
                        <p className="subtitle-info">
                          The Chronicles of Narnia: The Lion, the Witch and the
                          Wardrobe (video game) ... The Chronicles of Narnia:
                          The Lion, the Witch and the Wardrobe is an
                          action-adventure game released in 2005 by Traveller's
                          Tales. The game is based on the novel-adapted movie of
                          the same name.
                        </p>
                        <a href="#" className="btn btn-play text-light">
                          Play game
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          className="d-block headfoto mx-auto"
                          src="asset/harrypotterkepake.jpg"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h2 className="subtitle-text">
                          Harry Potter (Harry Potter: Hogwarts Mystery)
                        </h2>
                        <p className="subtitle-info">
                          Harry Potter: Hogwarts Mystery is the first game in
                          which players can create their own character and
                          experience life as a Hogwarts student. The game will
                          launch under Portkey Games, from Warner Bros.
                          Interactive Entertainment, the games label dedicated
                          to creating new Wizarding World mobile and video game
                          experiences.
                        </p>
                        <a href="#" className="btn btn-play text-light">
                          Play game
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          className="d-block headfoto mx-auto"
                          src="asset/pointblankkepake.jpg"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h2 className="subtitle-text">
                          Point Blank Beyond Limits
                        </h2>
                        <p className="subtitle-info">
                          Point Blank adalah sebuah permainan komputer ber-genre
                          FPS yang dimainkan secara online/offline. Permainan
                          ini dikembangkan oleh Zepetto dari Korea Selatan dan
                          dipublikasikan oleh Zepetto.
                        </p>
                        <a href="#" className="btn btn-play text-light">
                          Play game
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="header-ctg">Recommended for you</h2>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-11">
              <h2 className="header-ctg d-flex flex-lg-row-reverse">See All</h2>
            </div>
            <div className="col-lg-1">
              <a href="#" className="link-arrow">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/zombiekepake.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/pointblankkepake.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/suit2.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow">
              <div className="card-body">
                <img className="foto" src="asset/candy2.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="page-3">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="header-ctg">Explore top games</h2>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-11">
              <h2 className="header-ctg d-flex flex-lg-row-reverse">See All</h2>
            </div>
            <div className="col-lg-1">
              <a href="#" className="link-arrow">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/zombiekepake.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/pointblankkepake.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow ">
              <div className="card-body">
                <img className="foto" src="asset/suit2.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 cardBody">
          <a href="#" className="game-link">
            <div className="card border-0 shadow">
              <div className="card-body">
                <img className="foto" src="asset/candy2.jpg" />
                <p className="subtitle-info"> Plant Vs Zombie</p>
                <div className="d-flex justify-content-between">
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p className="review-count">100 Reviews</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="page-4" id="page4">
      <div className="container-fluid">
        <hr className="col-lg-8 mx-auto" />
        <div className="row pt-4">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-2 text-end">
                <img
                  src="asset/logoicon.png"
                  width={50}
                  height={50}
                  className="d-inline-block align-top"
                  alt
                />
              </div>
              <div className="col-lg-10">
                <p className="footer-text text-start link-arrow">Game Online</p>
              </div>
            </div>
            <p className="subtitle-info">
              Game Online adalah wadah game peramban yang menampilkan permainan
              online gratis terbaik.Semua permainan kami berjalan di peramban
              dan dapat dimainkan secara instan tanpa pengunduhan atau
              pemasangan.
            </p>
          </div>
          <div className="col-lg-2 ml-3">
            <p className="footer-text link-arrow"> About Us</p>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Terms of Use</p>
            </a>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Privacy Policy</p>
            </a>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Help</p>
            </a>
          </div>
          <div className="col-lg-2 ml-3">
            <p className="footer-text link-arrow"> Community</p>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Membership</p>
            </a>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Contact Us</p>
            </a>
            <a href="#" className="game-link">
              <p className="subtitle-info"> Career</p>
            </a>
          </div>
          <div className="col-lg-4 align-self-center text-center">
            <p className="footer-text link-arrow">Connect us</p>
            <div className="row text-center">
              <a href="#" className="link-arrow col-lg-3">
                <i className="bi bi-discord" />
              </a>
              <a href="#" className="link-arrow col-lg-3">
                <i className="bi bi-instagram " />
              </a>
              <a href="#" className="link-arrow col-lg-3">
                <i className="bi bi-twitch " />
              </a>
              <a href="#" className="link-arrow col-lg-3">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>
        <hr className="col-lg-8 mx-auto mt-lg-3" />
        <p className="pt-lg-3 text-center">
          {" "}
          Copyright 2021 All right reserved
        </p>
      </div>
    </div>
  </footer>
  <meta charSet="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  {/*
manifest.json provides metadata used when your web app is installed on a
user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  {/*
Notice the use of %PUBLIC_URL% in the tags above.
It will be replaced with the URL of the `public` folder during the build.
Only files inside the `public` folder can be referenced from the HTML.

Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
work correctly both with client-side routing and a non-root public URL.
Learn how to configure a non-root public URL by running `npm run build`.
    */}
  <title>React App</title>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root" />
  {/*
This HTML file is a template.
If you open it directly in the browser, you will see an empty page.

You can add webfonts, meta tags, or analytics to this file.
The build step will place the bundled scripts into the <body> tag.

To begin the development, run `npm start` or `yarn start`.
To create a production bundle, use `npm run build` or `yarn build`.
    */}
</>
