import React, { useState } from "react";
import nosotrosContext from "./nosotrosContext";

const NosotrosProvider = ({children}) => {
    const initialStateHistoria = {
        imagen: "https://firebasestorage.googleapis.com/v0/b/imagenes-50efc.appspot.com/o/Restaurante%2Fnosotros%2Fhistoria.png?alt=media&token=9dc093ce-65fb-42bb-af0d-d025e823e196",
        titulo: "Nuestra Historia",
        historia: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        consectetur dignissimos animi suscipit eius, tenetur ullam ab
        ipsa culpa vel quibusdam nam asperiores voluptatem dolores earum
        autem fuga quasi illo.
     
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        reiciendis tenetur pariatur a iste eos saepe odio id quo illum.
        In blanditiis veniam vero quas, cumque quod rem ipsum! Neque

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        perferendis eos dolore voluptatibus architecto suscipit sequi
        perspiciatis vero reiciendis nihil dolores doloribus, quidem
        delectus. Optio impedit nemo molestiae corporis delectus.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
        molestiae corrupti doloremque possimus porro fuga veniam
        accusamus totam vel hic ea non, nisi beatae sed quo incidunt
        earum nobis? Ut?`
    }
    const [datosHistoria, setDatosHistoria] = useState(initialStateHistoria);
    const handleChangeDatosHistoria =(datos)=>{
        setDatosHistoria(datos);
    }

    const data={
        datosHistoria,
        handleChangeDatosHistoria,
    }
  return (
      <nosotrosContext.Provider value={data}>{children}</nosotrosContext.Provider>
  );
};

export default NosotrosProvider;
