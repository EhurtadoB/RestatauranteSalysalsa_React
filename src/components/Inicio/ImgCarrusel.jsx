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
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2FInicio%2Fcarusel1.png?alt=media&token=cdfeb7e4-483e-4f7e-a756-cf41b3aad0cc"
                className="d-block w-100"
                alt="..."
              />
              <div className="centrado">
                <img src="../assets/Img/logo.png" alt="..." className="logo_centrado" />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2FInicio%2Fcarusel2.png?alt=media&token=5999e9bf-4f9d-4a8c-8191-b66195346cde"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2FInicio%2Fcarusel3.png?alt=media&token=1651ada6-e302-49d4-97b5-a1f8176bdd3d"
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
