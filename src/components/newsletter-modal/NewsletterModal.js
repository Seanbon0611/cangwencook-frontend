import React, { useState } from "react";
import ReactDOM from "react-dom";
import CustomButton from "../custom-button/CustomButton";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import Socials from "../socials/Socials";
import "./newsletter-modal.styles.scss";

const NewsletterModal = ({ isShowing, hide, currentPage }) => {
  const [email, setEmail] = useState("");
  console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Api-token": `${process.env.REACT_APP_AC_KEY}`,
      },
      body: JSON.stringify({
        contact: {
          email: email,
        },
      }),
    };
    hide();
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
