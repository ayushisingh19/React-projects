import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          {/* Quick Links */}
          <div className="col">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#book">Book</a></li>
              <li><a href="#reviews">Review</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col">
            <h4>Our Services</h4>
            <ul className="list-unstyled">
              <li>Dental Care</li>
              <li>Message Therapy</li>
              <li>Cardiology</li>
              <li>Diagnosis</li>
              <li>Ambulance Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col">
            <h4>Contact Info</h4>
            <ul className="list-unstyled">
              <li><i className="fas fa-phone"></i> +123-456-7890</li>
              <li><i className="fas fa-phone"></i> +111-222-3333</li>
              <li><i className="fas fa-envelope"></i> shaikhonas@gmail.com</li>
              <li><i className="fas fa-envelope"></i> anosbhais@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Mumbai, India - 400104</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#facebook"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
              <li><a href="#twitter"><i class="fa-brands fa-twitter"></i>Twitter</a></li>
              <li><a href="#instagram"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
              <li><a href="#linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
              <li><a href="#pinterest"><i class="fa-brands fa-pinterest"></i>Pinterest</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>
            Created by <a href="#webdesigner">Mr. Web Designer</a> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
