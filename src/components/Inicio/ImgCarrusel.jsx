import React from "react";

const ImgCarrusel = () => {
  return (
    <>
      <div className="container_slider" style={{ zIndex: -2 }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="../assets/Img/carusel1.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="centrado">
                <img src="../assets/Img/logo.png" alt="..." className="logo_centrado" />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="../assets/Img/carusel2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="../assets/Img/carusel3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImgCarrusel;
