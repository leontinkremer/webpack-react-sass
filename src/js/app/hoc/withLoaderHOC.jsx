import React, { useState } from "react";
import Loader from "../components/common/Loader";

const withLoaderHOC =
  (Component) =>
  ({ ...props }) => {
    const [isLoading, setLoading] = useState(true);
    if (isLoading) {
      return <Loader />;
    } else {
      return <Component {...props} />;
    }
  };

export default withLoaderHOC;
