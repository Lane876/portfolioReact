import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="info">
          <h2>Do you want to send</h2>
          <h2>me a message?</h2>
          <h2>Do it :)</h2>
        </div>

        <form
          className="group"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="email"
          />
          <textarea
            className="form-input"
            name="message"
            placeholder="message"
          ></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
