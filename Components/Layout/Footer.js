import React from "react";

import styles from "../../styles/footer.module.scss";

import { Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <p>copyRight © 2023 - Nour Kh</p>
        <div>
          <Link href="mailto:m.nour.kh9346@gmail.com" color="inherit">
            <EmailIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/nour-kh-b843ba209">
            <LinkedInIcon />
          </Link>
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;
