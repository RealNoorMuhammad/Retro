import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import soon from "./coming.jpg";

const ComingSoon = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div>
      {" "}
      {!smallScreen && <div className="bg"></div>}
      {/* This is used For the mobile view Blue print Map*/}
      {smallScreen && <div className="mbg"></div>}
    </div>
  );
};

export default ComingSoon;
