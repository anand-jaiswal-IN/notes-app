import { Link } from "react-router-dom";

function NotFound() {
  const styles = {
    container: {
      textAlign: "center",
      padding: "100px 20px",
    },
    title: {
      fontSize: "72px",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    message: {
      fontSize: "18px",
      marginBottom: "40px",
    },
    link: {
      fontSize: "18px",
      color: "#007bff",
      textDecoration: "none",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Page Not Found</p>
      <p style={styles.message}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
NotFound;
