import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactD">
        <div className="contactDiv">
          <div className="contactInfo">
            <h1 className="contactHeading">Get In Touch</h1>
            <form className="contactForm">
              <label className="contactFormName">Name</label>
              <input type="text" className="contactInput" />
              <label className="contactFormName">Email</label>
              <input type="email" className="contactInput" />
              <label className="contactFormName">Location</label>
              <input type="location" className="contactInputLocation" />
              <button className="contactBtn">SUBMIT</button>
            </form>
          </div>
          <div className="contactDetails">
            <h1 className="detailHeading">Contact Information</h1>
            <span className="detailInfo">
              Address: 14, Wire Road Abuja, Nigeria
            </span>
            <span className="detailInfo">
              Call: 09125211434, Or 07030162042
            </span>
            <span className="detailInfo">Email: info@caregreek.com</span>
          </div>
        </div>
        <div className="contactImage">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?w=2000"
            alt=""
            className="contactImg"
          />
        </div>
      </div>
    </div>
  );
}
