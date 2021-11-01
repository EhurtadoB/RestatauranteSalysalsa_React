import React from "react";

const Informacion = () => {
  return (
    <>
      <div>
        <h1
          style={{
            fontSize: "4rem",
            color: "rgb(138, 0, 0)",
            fontFamily:
              'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            textAlign: "start",
          }}
        >
          Servicios
        </h1>
        <div className="row">
          <div className="col">
            <p
              style={{
                textAlign: "justify",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              possimus rerum, ipsa explicabo itaque nam beatae animi culpa
              magnam saepe, dignissimos expedita, eius aut quaerat laboriosam
              iste facilis eaque assumenda! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ea, minus aliquam, odit rerum
              temporibus, accusantium sapiente adipisci voluptate maiores beatae
              vero! Vero eligendi dolor ipsa ea similique dignissimos fugiat
              illo.
            </p>
          </div>
          <div className="col">
            <p
              style={{
                textAlign: "justify",
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ullam dolore totam perspiciatis. Nulla, similique
              voluptate. Libero deserunt perferendis tempora quaerat soluta
              cupiditate aperiam natus cumque adipisci dolore, dolores dolorem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestiae dignissimos provident, doloremque deserunt voluptatem
              expedita perspiciatis in explicabo sed impedit excepturi eaque
              aliquam, blanditiis itaque quisquam adipisci alias eos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informacion;
