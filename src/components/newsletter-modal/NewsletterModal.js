import React from "react";
import ReactDOM from "react-dom";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import Socials from "../socials/Socials";
import "./newsletter-modal.styles.scss";

const NewsletterModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
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
                  <form className="modal-content">
                    <h3>Don't Miss Out!</h3>
                    <p>
                      Be the first to know about new recipes, seasonal specials
                      and more!
                    </p>
                    <NewsletterForm />
                  </form>
                </div>
                <Socials />
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default NewsletterModal;
