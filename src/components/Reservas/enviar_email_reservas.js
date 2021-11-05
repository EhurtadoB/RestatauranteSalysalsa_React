import emailjs from "emailjs-com";

const sendMail = (params) => {
  const tempParams = {
    nombre: params.nombres,
    Apellido: params.apellidos,
    cc: params.email,
    servicios: params.servicio,
    fecha: params.fecha,
    n_personas: params.num_personas,
    telefono: params.telefono,
  };

  emailjs
    .send("gmail", "template_qa96fda", tempParams, "user_WuQPc5Oqw7VC55jrpk8Wq")
    .then((res) => {
      console.log("success", res.status);
    });
};

export { sendMail };
