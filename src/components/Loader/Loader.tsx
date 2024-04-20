import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
    />
  );
};

export default Loader;