import React from "react";
import Container from "../Container";
import Section from "../Section";
import style from "./_layout.module.scss";

const Footer = () => {
  const { row, column, footer, line, footerText } = style;

  return (
    <Section>
      <Container>
        <div className={row}>
          <div className={column}>
            <div className={footer}>
              <hr className={line} />
              <p className={footerText}>Copyright © 2022 jobTime</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
