import { ThreeDots } from "react-loader-spinner";

import React from "react";

const Loader = () => {
  return (
    <ThreeDots
      color="#304ffe"
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
      height={45}
    />
  );
};

export default Loader;
