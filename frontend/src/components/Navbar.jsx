import React from "react";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";

function Navbar() {
  const isLoggedIn = localStorage.getItem(ACCESS_TOKEN) ? true : false;

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      marginBottom : "2rem"
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    navList: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: "20px",
    },
    navLink: {
      color: "#333",
      textDecoration: "none",
      fontSize: "16px",
      padding: "8px 12px",
      transition: "background-color 0.3s, color 0.3s",
      borderRadius: "4px",
    },
    navLinkHover: {
      backgroundColor: "#f0f0f0",
    },
    logoutButton: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.navLink}>
          Notes-App
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li style={styles.navItem}>
              <Link
                to="/logout"
                style={{ ...styles.navLink, ...styles.logoutButton }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>
                Login
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/register" style={styles.navLink}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
