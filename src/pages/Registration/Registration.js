import React from "react";
import PhoneInput from "react-phone-input-2";
import "./styles.css";
import "react-phone-input-2/lib/style.css";
import { BiUserCircle } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <div className="info">
        <span>
          <div className="checkbox">
            <input type="checkbox" id="presents" />
            <label htmlFor="presents">
              Does not represent a member of the Chamber
            </label>
          </div>
          <div className="company">
            <select>
              <option value="">company</option>
              <option value="">company</option>
            </select>
          </div>
          <input type="email" placeholder="E-mail*" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat your Password*" />
          <div className="appeal">
            <select>
              <option value="">appeal</option>
              <option value="">appeal</option>
            </select>
          </div>
          <a className="pirvacy" href>
            GDPR Policy
          </a>
          <div className="checkbox">
            <input type="checkbox" id="contest" />
            <label htmlFor="contest">
              contest for processing private data*
            </label>
          </div>
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            sitekey={`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`}
          />

          <button>
            <BiUserCircle />
            Registration
          </button>
        </span>
        <span>
          <input type="text" placeholder="First Name*" />
          <input type="number" placeholder="Date of Birth" />
          <input type="text" placeholder="Position*" />
          <input type="text" placeholder="Position*" />
          <div className="number">
            <PhoneInput className="input" country={"uz"} />
          </div>
        </span>
      </div>
    </div>
  );
}
