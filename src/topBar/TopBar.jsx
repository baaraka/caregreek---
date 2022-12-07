import { useState } from "react";
import "./TopBar.css";

export default function TopBar() {
  const [show, setShow] = useState(false);

  return (
    <div className="topBar">
      <div className="homeTop">
        <div className="homeTopLeft topLeftImg">
          <img
            src="https://img.freepik.com/premium-vector/letter-og-os-luxury-simple-logo-design-with-gold-color-best-company-premium-product_563735-24.jpg"
            alt=""
            className="homeLogoImg"
          />
        </div>
        <div className="homeTopCenter">
          <ul className="homeNavigationBar">
            <li className="homeNavigationBarItem">Home</li>
            <li className="homeNavigationBarItem">About Us</li>
            <li className="homeNavigationBarItem">Services</li>
            <li className="homeNavigationBarItem">Contact</li>
          </ul>
        </div>
        <div className="homeTopRight">
          <ul className="navigationBar">
            <li className="navigationBarItem">SHEDULE SERVICE</li>
          </ul>
        </div>
        <div className="toggleMenu">
          <i
            onClick={() => setShow(!show)}
            className="showBtn fa-solid fa-bars"
          ></i>
        </div>
        {show ? (
          <div className="sideBar">
            <div className="sideTopCenter">
              <ul className="sideNavigationBar">
                <li className="sideNavigationBarItem">Home</li>
                <li className="sideNavigationBarItem">About Us</li>
                <li className="sideNavigationBarItem">Services</li>
                <li className="sideNavigationBarItem">Contact</li>
                <li className="navigationBarItem sideNavigationBarItem">
                  SHEDULE SERVICE
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
