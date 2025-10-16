import './app.css'

function App() {

  return (
    <>
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              dirEngine.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="tour.html" className="nav-link">
                    Tour
                  </a>
                </li>
                <li className="nav-item">
                  <a href="hotel.html" className="nav-link">
                    Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item cta">
                  <a href="contact.html" className="nav-link">
                    <span>Add listing</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <div
          className="hero-wrap js-fullheight"
          style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        >
          <div className="overlay hide_me" />
          <div className="container">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
              
            >
              <div
                className="col-md-9 ">
                <h1
                  className="mb-4">
                  <strong>
                    Explore <br />
                  </strong>{" "}
                  your amazing city
                </h1>
                <p>
                  Find great places to stay, eat, shop, or visit from local experts
                </p>
                <div className="block-17 my-4">
                  <form action="" method="post" className="d-block d-flex">
                    <div className="fields d-block d-flex">
                      <div className="textfield-search one-third">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ex: food, service, hotel"
                        />
                      </div>
                      <div className="select-wrap one-third">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Keyword search"
                        >
                          <option value="">Where</option>
                          <option value="">San Francisco USA</option>
                          <option value="">Berlin Germany</option>
                          <option value="">Lodon United Kingdom</option>
                          <option value="">Paris Italy</option>
                        </select>
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="search-submit btn btn-primary"
                      defaultValue="Search"
                    />
                  </form>
                </div>
                <p>Or browse the highlights</p>
                <p className="browse d-md-flex">
                  <span className="d-flex justify-content-md-center align-items-md-center">
                    <a href="#">
                      <i className="flaticon-fork" />
                      Restaurant
                    </a>
                  </span>
                  <span className="d-flex justify-content-md-center align-items-md-center">
                    <a href="#">
                      <i className="flaticon-hotel" />
                      Hotel
                    </a>
                  </span>
                  <span className="d-flex justify-content-md-center align-items-md-center">
                    <a href="#">
                      <i className="flaticon-meeting-point" />
                      Places
                    </a>
                  </span>
                  <span className="d-flex justify-content-md-center align-items-md-	center">
                    <a href="#">
                      <i className="flaticon-shopping-bag" />
                      Shopping
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section services-section bg-light">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon">
                      <span className="flaticon-guarantee" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Best Price Guarantee</h3>
                    <p>
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon">
                      <span className="flaticon-like" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Travellers Love Us</h3>
                    <p>
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon">
                      <span className="flaticon-detective" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Best Travel Agent</h3>
                    <p>
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-self-stretch ">
                <div className="media block-6 services d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon">
                      <span className="flaticon-support" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Our Dedicated Support</h3>
                    <p>
                      A small river named Duden flows by their place and supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-destination">
          <div className="container">
            <div className="row justify-content-start mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <span className="subheading">Featured</span>
                <h2 className="mb-4">
                  <strong>Featured</strong> Destination
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="destination-slider owl-carousel ">
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-1.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <span className="listing">15 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-2.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">San Francisco, USA</a>
                        </h3>
                        <span className="listing">20 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-3.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">Lodon, UK</a>
                        </h3>
                        <span className="listing">10 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-4.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">Lion, Singapore</a>
                        </h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-5.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">Australia</a>
                        </h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="destination">
                      <a
                        href="#"
                        className="img d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: "url(images/destination-6.jpg)" }}
                      >
                        <div className="icon d-flex justify-content-center align-items-center">
                          <span className="icon-search2" />
                        </div>
                      </a>
                      <div className="text p-3">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <span className="listing">3 Listing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-start mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <span className="subheading">Special Offers</span>
                <h2 className="mb-4">
                  <strong>Top</strong> Tour Packages
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/destination-1.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price">$200</span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <p className="days">
                      <span>2 days 3 nights</span>
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/destination-2.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price">$200</span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <p className="days">
                      <span>2 days 3 nights</span>
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/destination-3.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price">$200</span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <p className="days">
                      <span>2 days 3 nights</span>
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/destination-4.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price">$200</span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <p className="days">
                      <span>2 days 3 nights</span>
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/destination-5.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Paris, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price">$200</span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <p className="days">
                      <span>2 days 3 nights</span>
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ftco-section ftco-counter img"
          id="section-counter"
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section heading-section-white ">
                <h2 className="mb-4">Some fun facts</h2>
                <span className="subheading">More than 100,000 websites hosted</span>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={100000}>
                          0
                        </strong>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={40000}>
                          0
                        </strong>
                        <span>Destination Places</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={87000}>
                          0
                        </strong>
                        <span>Hotels</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={56400}>
                          0
                        </strong>
                        <span>Restaurant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-start mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <span className="subheading">Special Offers</span>
                <h2 className="mb-4">
                  <strong>Popular</strong> Hotels &amp; Rooms
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/hotel-1.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Hotel, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price per-price">
                          $40
                          <br />
                          <small>/night</small>
                        </span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> Miami, Fl
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/hotel-2.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Hotel, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price per-price">
                          $40
                          <br />
                          <small>/night</small>
                        </span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> Miami, Fl
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/hotel-3.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Hotel, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price per-price">
                          $40
                          <br />
                          <small>/night</small>
                        </span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> Miami, Fl
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/hotel-4.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Hotel, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price per-price">
                          $40
                          <br />
                          <small>/night</small>
                        </span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> Miami, Fl
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/hotel-5.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <div className="d-flex">
                      <div className="one">
                        <h3>
                          <a href="#">Hotel, Italy</a>
                        </h3>
                        <p className="rate">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star-o" />
                          <span>8 Rating</span>
                        </p>
                      </div>
                      <div className="two">
                        <span className="price per-price">
                          $40
                          <br />
                          <small>/night</small>
                        </span>
                      </div>
                    </div>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> Miami, Fl
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-md-5 heading-section ">
                <span className="subheading">Best Directory Website</span>
                <h2 className="mb-4 pb-3">
                  <strong>Why</strong> Choose Us?
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated they
                  live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
                <p>
                  Even the all-powerful Pointing has no control about the blind texts
                  it is an almost unorthographic life.
                </p>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-primary mt-4 px-4 py-3"
                  >
                    Read more
                  </a>
                </p>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6 heading-section ">
                <span className="subheading">Testimony</span>
                <h2 className="mb-4 pb-3">
                  <strong>Our</strong> Guests Says
                </h2>
                <div className="row ">
                  <div className="col-md-12">
                    <div className="carousel-testimony owl-carousel">
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img mb-5"
                            style={{ backgroundImage: "url(images/person_1.jpg)" }}
                          >
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text ml-md-4">
                            <p className="mb-5">
                              Far far away, behind the word mountains, far from the
                              countries Vokalia and Consonantia, there live the blind
                              texts.
                            </p>
                            <p className="name">Dennis Green</p>
                            <span className="position">Guest from italy</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img mb-5"
                            style={{ backgroundImage: "url(images/person_2.jpg)" }}
                          >
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text ml-md-4">
                            <p className="mb-5">
                              Far far away, behind the word mountains, far from the
                              countries Vokalia and Consonantia, there live the blind
                              texts.
                            </p>
                            <p className="name">Dennis Green</p>
                            <span className="position">Guest from London</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap d-flex">
                          <div
                            className="user-img mb-5"
                            style={{ backgroundImage: "url(images/person_3.jpg)" }}
                          >
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text ml-md-4">
                            <p className="mb-5">
                              Far far away, behind the word mountains, far from the
                              countries Vokalia and Consonantia, there live the blind
                              texts.
                            </p>
                            <p className="name">Dennis Green</p>
                            <span className="position">Guest from Philippines</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-start mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <span className="subheading">Special Offers</span>
                <h2 className="mb-4">
                  <strong>Popular</strong> Restaurants
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/restaurant-1.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Luxury Restaurant</a>
                    </h3>
                    <p className="rate">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star-o" />
                      <span>8 Rating</span>
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Discover</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/restaurant-2.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Luxury Restaurant</a>
                    </h3>
                    <p className="rate">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star-o" />
                      <span>8 Rating</span>
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/restaurant-3.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Luxury Restaurant</a>
                    </h3>
                    <p className="rate">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star-o" />
                      <span>8 Rating</span>
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <div className="destination">
                  <a
                    href="#"
                    className="img img-2 d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: "url(images/restaurant-4.jpg)" }}
                  >
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3">
                    <h3>
                      <a href="#">Luxury Restaurant</a>
                    </h3>
                    <p className="rate">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star-o" />
                      <span>8 Rating</span>
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                    </p>
                    <hr />
                    <p className="bottom-area d-flex">
                      <span>
                        <i className="icon-map-o" /> San Franciso, CA
                      </span>
                      <span className="ml-auto">
                        <a href="#">Book Now</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-start mb-5 pb-3">
              <div className="col-md-7 heading-section ">
                <span className="subheading">Recent Blog</span>
                <h2>
                  <strong>Tips</strong> &amp; Articles
                </h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                  ></a>
                  <div className="text p-4 d-block">
                    <span className="tag">Tips, Travel</span>
                    <h3 className="heading mt-3">
                      <a href="#">
                        8 Best homestay in Philippines that you don't miss out
                      </a>
                    </h3>
                    <div className="meta mb-3">
                      <div>
                        <a href="#">August 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <span className="tag">Culture</span>
                    <h3 className="heading mt-3">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the blind
                        texts
                      </a>
                    </h3>
                    <div className="meta mb-3">
                      <div>
                        <a href="#">August 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <span className="tag">Tips, Travel</span>
                    <h3 className="heading mt-3">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the blind
                        texts
                      </a>
                    </h3>
                    <div className="meta mb-3">
                      <div>
                        <a href="#">August 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("images/image_4.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <span className="tag">Tips, Travel</span>
                    <h3 className="heading mt-3">
                      <a href="#">
                        Even the all-powerful Pointing has no control about the blind
                        texts
                      </a>
                    </h3>
                    <div className="meta mb-3">
                      <div>
                        <a href="#">August 12, 2018</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat" /> 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7 text-center heading-section heading-section-white ">
                  <h2>Subcribe to our Newsletter</h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in
                  </p>
                  <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8">
                      <form action="#" className="subscribe-form">
                        <div className="form-group d-flex">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email address"
                          />
                          <input
                            type="submit"
                            defaultValue="Subscribe"
                            className="submit px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">dirEngine</h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                  </p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className="">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-5">
                  <h2 className="ftco-heading-2">Information</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-2 d-block">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Become a partner
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Best Price Guarantee
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Privacy and Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Customer Support</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-2 d-block">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Payment Option
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Booking Tips
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        How it works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li>
                        <span className="icon icon-map-marker" />
                        <span className="text">
                          203 Fake St. Mountain View, San Francisco, California, USA
                        </span>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon icon-phone" />
                          <span className="text">+2 392 3929 210</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon icon-envelope" />
                          <span className="text">info@yourdomain.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* loader */}
        <div id="ftco-loader" className="show fullscreen hide_me">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              strokeMiterlimit={10}
              stroke="#F96D00"
            />
          </svg>
        </div>
      </>

    </>
  )
}

export default App
