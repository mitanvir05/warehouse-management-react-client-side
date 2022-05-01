import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer
      style={{ marginTop: "auto" }}
      className="bg-dark text-white text-center "
    >
      <p>
        <small> &copy; {year} </small>
      </p>
    </footer>
  );
};

export default Footer;
