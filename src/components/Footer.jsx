import React from 'react'
import logo from "../assets/images/TMIH_LOGO_Black_icon.png";


function Footer() {
  return (
    <footer className="footer bg-[#240133] text-white p-10">
     
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">A certificate will be provided upon completing the course.
        </a>
        <a className="link link-hover">Guest lecture by an experienced person.
        </a>
        <a className="link link-hover">Our team will be available to resolve queries at any time.
        </a>
      
      </nav>
      <nav>
        <h6 className="footer-title">Courses</h6>
        <a className="link link-hover">Frontend Developmet</a>
        <a className="link link-hover">Backend Developmet</a>
        <a className="link link-hover">MERN Stack Developmet</a>
        <a className="link link-hover">Salesforce</a>
        <a className="link link-hover">CRM training</a>
        <a className="link link-hover">Salesforce + CRM training </a>

      </nav>
      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <a className="link link-hover">Phone No :</a>
        <a className="link link-hover">Email : </a>

      </nav>
      <aside>
      <img
      src={logo}
      alt="Tech Minds It Hub"
      className="w-16 h-14 object-contain"
    />
      <p>
      Tech Minds 
        <br />
        It Hub
      </p>
    </aside>
    </footer>
  );
}

export default Footer