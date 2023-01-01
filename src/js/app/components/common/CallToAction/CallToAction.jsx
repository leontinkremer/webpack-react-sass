// built-in modules
import React from "react";

// styles
import style from "./_layout.module.scss";

// components
import Button from "../Button";

const CallToAction = () => {
  const {
    section,
    container,
    row,
    columnLeft,
    columnRight,
    contentBox,
    contentHeading,
    contentText,
    actionBox,
  } = style;

  return (
    <div className={section}>
      <div className={container}>
        <div className={row}>
          <div className={columnLeft}>
            <div className={contentBox}>
              <h1 className={contentHeading}>
                Lass jobTime sich um Deine Zeit kümmern.
              </h1>
              <p className={contentText}>
                Jetzt kostenlos registrieren und Zeiten im Blick behalten.
              </p>
            </div>

            <div className={columnRight}>
              <div className={actionBox}>
                <Button>Jetzt kostenlos testen</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
