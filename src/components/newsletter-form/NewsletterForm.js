import React, { useEffect, useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

const NewsletterForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
    // console.log(e.target.email.value);
    // fetch("https://na1595191147.activehosted.com/proc.php", {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: e.target.email.value,
    //   }),
    //   mode: "no-cors",
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setFormSubmitted(true);
    //     setTimeout(() => {
    //       setFormSubmitted(false);
    //     }, 5000);
    //   })
    //   .catch((err) => console.log("error:", err));
  };

  return (
    <div className="newsletter-form">
      {formSubmitted && (
        <p>
          <strong>THANK YOU</strong> for joining our mailing list!
          <br />
          Check your inbox for a confirmation.
        </p>
      )}
      {!formSubmitted && (
        <form
          method="POST"
          action="https://na1595191147.activehosted.com/proc.php"
          id="_form_7_"
          class="_form _form_7 _inline-form _inline-style _dark"
          novalidate
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="u" value="7" />
          <input type="hidden" name="f" value="7" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <div class="_form-content">
            <div class="_form_element _x50828651 _inline-style ">
              <label class="_form-label">Email*</label>
              <div class="_field-wrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Type your email"
                  required
                />
              </div>
            </div>
            <div class="_button-wrapper _inline-style">
              <CustomButton id="_form_7_submit" type="submit">
                Submit
              </CustomButton>
            </div>
            <div class="_clear-element"></div>
          </div>
          <div class="_form-thank-you" style={{ display: "none" }}></div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;

// <form
//   method="POST"
//   action="https://na1595191147.activehosted.com/proc.php"
//   id="_form_7_"
//   class="_form _form_7 _inline-form _inline-style _dark"
//   novalidate
// >
//   <input type="hidden" name="u" value="7" />
//   <input type="hidden" name="f" value="7" />
//   <input type="hidden" name="s" />
//   <input type="hidden" name="c" value="0" />
//   <input type="hidden" name="m" value="0" />
//   <input type="hidden" name="act" value="sub" />
//   <input type="hidden" name="v" value="2" />
//   <div class="_form-content">
//     <div class="_form_element _x50828651 _inline-style ">
//       <label class="_form-label">Email*</label>
//       <div class="_field-wrapper">
//         <input
//           type="text"
//           name="email"
//           placeholder="Type your email"
//           required
//         />
//       </div>
//     </div>
//     <div class="_button-wrapper _inline-style">
//       <button id="_form_7_submit" class="_submit" type="submit">
//         Submit
//       </button>
//     </div>
//     <div class="_clear-element"></div>
//   </div>
//   <div class="_form-thank-you" style={{ display: "none" }}></div>
// </form>;
