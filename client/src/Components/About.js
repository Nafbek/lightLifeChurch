import React from "react";

const style = {
  elementWidth: {
    marginBottom: 0,
    padding: "1rem",
  },
};
export default function About() {
  return (
    <div className="container">
      <div>
        <h2>About us</h2>
      </div>
      <div style={style.elementWidth}>
        <p>
          This church is ..................................... This Congregation
          believes, teaches, and confesses Jesus Christ as Lord and Savior,
          through whom everything was made, and through whose life, death, and
          resurrection God fashions a new creation and believes that salvation
          is by grace through faith alone. This Congregation believes, teaches,
          and confesses Jesus Christ as Lord and Savior, through whom everything
          was made, and through whose life, death, and resurrection God fashions
          a new creation and believes that salvation is by grace through faith
          alone.{" "}
        </p>
      </div>
    </div>
  );
}
