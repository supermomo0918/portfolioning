import React,{useState} from "react"
import {
  FaGithub,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
const Contact = () => {
  const [contact] = useState({
    subHeader: "聯絡我",
    phone:"0905566096",
    github:"supermomo0918",
    email:"su830918ggg@yahoo.com.tw",
  });
  return (
    <div className="contact">
      <div className="container">
      <div className="common">
          <h1 className="mainHeader">{contact.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <p>
              前端工程是一個充滿挑戰性的事， 會遇到許多要解決的問題，而我沉浸在逐步分析解決的過程中，因此想成為前端工程師做進一步的學習和鑽研
              </p>
              <ul className="contactCircles">
                <li title={contact.phone}>
                  <FaMobileAlt className="headerIcon" />
                </li>
                <li title={contact.github}>
                  <FaGithub className="headerIcon" />
                </li>
                <li title={contact.email}>
                  <FaEnvelope className="headerIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
