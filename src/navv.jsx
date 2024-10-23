import React from 'react';

import { Link } from 'react-router-dom';  // Assuming you are using React Router

const Navbar = () => {
  return (
    <>
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/display" style={styles.navLink}>Display</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/search" style={styles.navLink}>Search</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/searchbyname" style={styles.navLink}>Search By Name</Link>
        </li>
         {/* <li style={styles.navItem}>
          <Link to="/Update" style={styles.navLink}>Update</Link>
        </li> 
      */}
      </ul>
    </nav>
  
    </>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'green',
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
