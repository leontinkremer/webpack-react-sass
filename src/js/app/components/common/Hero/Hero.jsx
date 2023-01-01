// built-in modules
import React from "react";

// components
import Button from "../Button";

// styles
import style from "./_layout.module.scss";

// assets
import headerImage from "../../../../../images/headerImage.png";

const Hero = () => {
  const { container, row, column, inner, heading, headingSpan, paragraph } =
    style;

  return (
    <header className={container} id="hero">
      <div className={row}>
        <div className={column}>
          <div className={inner}>
            <h1 className={heading}>
              <span className={headingSpan}>Deine</span> Zeiterfassung
            </h1>
            <p className={paragraph}>Einfach, unkompliziert, sofort.</p>
            <Button>Jetzt kostenlos testen</Button>
            <div>
              <img src={headerImage} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
