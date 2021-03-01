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
            } else {
              hide();
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
                  <p>
                    Be the first to know about new recipes, seasonal specials
                    and more!
                  </p>
                  <NewsletterForm onChange={(e) => setEmail(e.target.value)} />
                  <div className="sbmt-btn">
                    <CustomButton type="submit">Submit</CustomButton>
                  </div>
                  <h3>{error}</h3>
                </form>
              </div>
              <Socials />
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
