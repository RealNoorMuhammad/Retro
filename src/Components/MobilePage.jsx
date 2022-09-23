import { textAlign } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const MobilePage = () => {
  return (
    <div id="message">
      
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center", color: "#fff", paddingTop: "1%" }}>
        <Card
          sx={{ maxWidth: 445 }}
          style={{
            background: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      
        </Card>

        <h1 style={{ textAlign: "center", color: "#fff" }}> Desktop Only</h1>
        <p style={{ textAlign: "center", color: "#fff" }}>
          Login from Desktop to see the page.
        </p>
        <p style={{ textAlign: "center", color: "#fff" }}>
          w w w . o r g v s m . c o m
        </p>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Grid
        container
        px={2}
        mt={15}
        display={"flex"}
        alignItems={"center"}
        style={{ background: "black", height: "100%", paddingTop: "20px" }}
        className="footer_section_mobile"
      >
        <Grid item xs={8}>
          <div style={{ width: "40px", height: "100%" }}>
           
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent={"space-between"} display={"flex"}>
            <i class="fa-brands fa-instagram sicons"></i>
            <i class="fa-brands fa-twitter sicons"></i>
            <i class="fa-brands fa-facebook sicons"></i>
            <i class="fa-brands fa-discord sicons"></i>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MobilePage;
