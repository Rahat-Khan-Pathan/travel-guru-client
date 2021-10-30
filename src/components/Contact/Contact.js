import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";
import "./Contact.css";

const Contact = () => {
  const done = () => {
    document.getElementById("modal-btn").click();
    setTimeout(() => {
      document.getElementById("modal-close").click();
    }, 2000);
  };
  return (
    <div className="container contact-container">
      <Modal text={"Message Sent"}></Modal>
      <h1 className="choose-header mb-5">Contact Us</h1>
      <div className="row row-cols-1 row-cols-lg-2 g-4 px-2">
        <div className="col d-flex justify-content-center align-items-start">
          <img src="/contact.svg" className="w-100" alt="" />
        </div>
        <div className="col">
          <ContactForm done={done}></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
