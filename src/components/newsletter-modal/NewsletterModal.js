import React from "react";
import ReactDOM from "react-dom";
import NewsletterForm from "../newsletter-form/NewsletterForm";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./newsletter-modal.styles.scss";

const NewsletterModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
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
              </div>
              <form>
                <h1>Don't Miss a Recipe</h1>
                <FormInput label="Name" />
                <label>Email</label>
                <NewsletterForm />
                <div className="submit-button">
                  <CustomButton type="submit">Subscribe</CustomButton>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default NewsletterModal;
