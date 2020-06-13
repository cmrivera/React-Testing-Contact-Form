import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };
  /* const [color, setColor] = useState();*/

  /*const buttonClick = (e) => {
    setColor((color: "red"));
  };*/

  useForm(() => {
    axios
      .post("https://reqres.in/register-successful")
      .then((res) => setData(res.data))
      .then((res) => console.log(res.data))

      .catch((err) => console.log(err));
  }, [setData]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName" data-testid="first name">
            First Name*
          </label>
          <input
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true /*maxLength: 3*/ })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input name="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        <div>
          <label>CheckBox Practice</label>
          <input type="checkbox" />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <button>Practice Testing Button</button>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
