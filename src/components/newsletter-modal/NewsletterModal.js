import React, { useState } from "react";
import ReactDOM from "react-dom";
import api from "../../services/api";
import CustomButton from "../custom-button/CustomButton";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import Socials from "../socials/Socials";
import "./newsletter-modal.styles.scss";

const NewsletterModal = ({ isShowing, hide, currentPage }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Config to create new active record contact
    const contactConfig = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    };
    //HTTP request to create a n ew Contact within Active Campaign
    const newContact = await api.activeCampaign
      .newContact(contactConfig)
      .then((data) => {
        hide();
        if (data.response.errors) {
          setError(data.response.errors.error);
        } else {
          //Once Contact has been created, associate this contact with a tag based on the current page
          const addTagConfig = {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contact: data.response.contact.id,
              tag: currentPage,
            }),
          };
          api.activeCampaign.addTagToContact(addTagConfig).then((data) => {
            if (data.response.errors) {
              setError(data.response.errors.title);
            }
          });
        }
      });
  };

  if (isShowing) {
    return ReactDOM.createPortal(
      <>
        <div className="modal-overlay">
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <span
                  aria-hidden="true"
                  className="modal-close-button"
                  onClick={hide}
                >
                  &times;
                </span>
                <form className="modal-content" onSubmit={handleSubmit}>
                  <h3>Don't Miss Out!</h3>
                  <p style={{ padding: "3px 0px" }}>
                    Win a CanGwenCook sweater!
                  </p>
                  <p>Sign up for our monthly newsletter to enter!</p>
                  <div className="newsletter-giveaway">
                    <img
                      src="https://storage.cloud.google.com/can-gwen-cook-pics/sweaterneck1.png"
                      alt="newsletter giveaway"
                      className="giveaway-reward"
                    />
                  </div>
                  <NewsletterForm onChange={(e) => setEmail(e.target.value)} />
                  <div className="sbmt-btn">
                    <CustomButton type="submit">Submit</CustomButton>
                  </div>
                  <h3>{error}</h3>
                </form>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </>,
      document.body
    );
  } else {
    return null;
  }
};

export default NewsletterModal;
