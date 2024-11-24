import React from 'react'

const HomeSlider = () => {
  return (
<>
<div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/assets/img/slider1.JPG" className="d-block" alt="..." style={{ width: "100%", height: '650px' }} />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center">
              <div className="line align-center">
                <h1 style={{fontSize:'50px'}}>میرا ہنر میرا اثاثہ</h1> {/* Text inside the line */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./src/assets/img/slider2.JPG" className="d-block" alt="..." style={{ width: "100%", height: '650px' }} />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center">
              <div className="line">
                <h1 style={{fontSize:'50px'}}>میرا ہنر میرا اثاثہ</h1> {/* Text inside the line */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./src/assets/img/slider3.JPG" className="d-block" alt="..." style={{ width: "100%", height: '650px' }} />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center">
              <div className="line">
                <h1 style={{fontSize:'50px'}}>میرا ہنر میرا اثاثہ</h1> {/* Text inside the line */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</>
  )
}

export default HomeSlider
