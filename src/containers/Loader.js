import React from "react";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 200px auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <DotLoader css={override} sizeUnit={"px"} size={70} color={"#3688D7"} />
  );
};

export default Loader;
