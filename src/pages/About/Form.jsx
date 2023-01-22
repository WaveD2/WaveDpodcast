import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const Form = () => (
  <Box>
    <h4>Get in touch</h4>
    <h6>Send your message to us</h6>
    <div>
      <section>
        <label for="name">Full name *</label>
        <input id="name" type="text" placeholder="WaveD" />
      </section>
      <section>
        <label htmlFor="email">Email *</label>
        <input id="email" type="email" placeholder="waved@gmail.com" />
      </section>
      <section>
        <label htmlFor="phone">Phone *</label>
        <input id="phone" type="number" placeholder="Phone" />
      </section>
      <section>
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" placeholder="Subject..." />
      </section>
      <section>
        <label htmlFor="message">Message *</label>
        <textarea id="message" type="text" placeholder="message..." />
      </section>
    </div>
    <Button text={"SEND MESSAGE"} />
  </Box>
);

export default Form;

const Box = styled.div`
  width: 766px;
  margin: 20px auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    section {
      margin: 20px 0;
      label {
        display: block;
        font-family: "Montserrat Alternates";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #000000;
      }
      input {
        width: 300px;
        height: 40px;
        padding: 10px;
        background: #ffffff;
        border: 1.5px solid #000000;
        border-radius: 8px;
        outline: none;
        font-family: "Montserrat Alternates";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
      }
    }
    section:last-child {
      width: 100%;

      textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
        font-family: "Montserrat Alternates";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
        color: #4d4d4d;
      }
    }
  }
`;
