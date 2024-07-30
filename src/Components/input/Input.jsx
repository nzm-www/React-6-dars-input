import React, { useState, useRef } from "react";
import img from "../../assets/img.webp";
import "./Input.css";

function Input() {
  const [form, setForm] = useState({});
  const nameRef = useRef("");
  const lastnameRef = useRef("");
  const emailRef = useRef("");
  const compRef = useRef("");
  const addresRef = useRef("");
  const monthRef = useRef("");
  const dayRef = useRef("");
  const yearRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    const test = {
      name: nameRef.current.value,
      lastname: lastnameRef.current.value,
      email: emailRef.current.value,
      company: compRef.current.value,
      adres: addresRef.current.value,
      month: monthRef.current.value,
      day: dayRef.current.value,
      year: yearRef.current.value,
    };
    nameRef.current.value = "";
    lastnameRef.current.value = "";
    emailRef.current.value = "";
    compRef.current.value = "";
    addresRef.current.value = "";
    monthRef.current.value = "";
    dayRef.current.value = "";
    yearRef.current.reset();

    console.log(test);
  }

  return (
    <div className="boxq">
      <div className="box">
        <b
          style={{
            display: "flex",
            alignItems: "center",
            color: "#05ec93",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "50px" }} src={img} alt="" />
          <h2>YourEvent</h2>
        </b>
        <h2>Online Registration</h2>
        <form>
          <div className="firsi">
            <b>
              <h3>First Name</h3>
              <input ref={nameRef} type="text" placeholder="First Name" />
            </b>
            <b>
              <h3>Last Name</h3>
              <input ref={lastnameRef} type="text" placeholder="Last Name" />
            </b>
          </div>
          <div className="second">
            <h3>Email Address</h3>
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <h3>Company (if applicable)</h3>
            <input
              ref={compRef}
              type="text"
              placeholder="Company (if applicable)"
            />
            <h3>Phsical Address</h3>
            <input ref={addresRef} type="text" placeholder="Phsical Address" />
          </div>
          <h3>Data of Birth</h3>
          <div className="kunyiloy">
            <input ref={monthRef} type="number" placeholder="Month" />
            <input ref={dayRef} type="number" placeholder="Day" />
            <input ref={yearRef} type="number" placeholder="Year" />
          </div>
          <button onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                stroke="#fffffff"
                stroke-width="2"
              ></path>
              <path
                d="M17 15V18M17 21V18M17 18H14M17 18H20"
                stroke="#fffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            ADD FILE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
