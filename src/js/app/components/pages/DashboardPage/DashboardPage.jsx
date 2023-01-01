import React, { useEffect } from "react";
import withLoaderHOC from "../../../hoc/withLoaderHOC";
import style from "./_layout.module.scss";
import Statistics from "../../common/Statistics";

const DashboardPage = () => {
  const DashboardComponent = withLoaderHOC(Statistics);
  return (
    <>
      <DashboardComponent />
    </>
  );
};

export default DashboardPage;
