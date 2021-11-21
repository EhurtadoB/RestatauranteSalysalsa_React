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
              .<img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2Fmenu%2Fmenu1.png?alt=media&token=bae966be-de02-40b5-901d-6eb96581c63e" alt="menu1" className="img_item" />
            </div>
            <div className="item">
              .<img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2Fmenu%2Fmenu2.png?alt=media&token=4a25a49a-3913-49a6-b0b2-a4d12027e608" alt="menu2" className="img_item" />
            </div>
            <div className="item">
              .<img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2Fmenu%2Fmenu3.png?alt=media&token=481cdd69-a056-48fd-822b-65bce2608129" alt="menu3" className="img_item" />
            </div>
            <div className="item">
              .<img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2Fmenu%2Fmenu4.png?alt=media&token=1cb223d6-5b24-4757-ab73-ad41804fb5ba" alt="menu4" className="img_item" />
            </div>
          </div>
          <div className="menu">
            <div className="imagen">
              <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2FInicio%2Fcarusel3.png?alt=media&token=1651ada6-e302-49d4-97b5-a1f8176bdd3d" alt="carusel3" />
            </div>
            <a href="/menu">
              <div className="botom">ir al menu</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destacados;
