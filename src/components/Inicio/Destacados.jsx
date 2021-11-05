import React from "react";

const Destacados = () => {
  return (
    <>
      <div className="destacados">
        <div className="titulo">
          <h1>las recomendaciones del chef</h1>
        </div>
        <div className="contenido">
          <div className="recomendados">
            <div className="item">
              .<img src="../assets/Img/menu1.png" alt="menu1" className="img_item" />
            </div>
            <div className="item">
              .<img src="../assets/Img/menu2.png" alt="menu2" className="img_item" />
            </div>
            <div className="item">
              .<img src="../assets/Img/menu3.png" alt="menu3" className="img_item" />
            </div>
            <div className="item">
              .<img src="../assets/Img/menu4.png" alt="menu4" className="img_item" />
            </div>
          </div>
          <div className="menu">
            <div className="imagen">
              <img src="../assets/Img/carusel3.png" alt="carusel3" />
            </div>
            <a href="menu.html">
              <div className="botom">ir al menu</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destacados;
