import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <a
          href="https://github.com/Google-DSC-DMCE"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          <GitHubIcon style={styles.GitHubIcon} />
        </a>
        <a
          href="https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubLink}
        >
          <HomeIcon />
        </a>
        <p style={styles.copyrightText}>
          © {new Date().getFullYear()} Google Developers Club DMCE. All rights
          reserved.
        </p>
        <p style={styles.madeWithLove}>Made with love in Mumbai ❤️</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#101418",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ccc",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  githubLink: {
    display: "inline-block",
    margin: "0 10px",
    color: "#007fff",
    textDecoration: "none",
  },
  GitHubIcon: {
    fontSize: "30px",
  },
  copyrightText: {
    fontSize: "14px",
    color: "#007fff",
    margin: "0 10px",
  },
  madeWithLove: {
    fontSize: "14px",
    color: "#007fff",
    margin: "0 10px",
  },
};

export default Footer;
