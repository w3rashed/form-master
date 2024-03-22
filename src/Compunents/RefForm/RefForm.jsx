import React, { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="flex text-center">
      <form onSubmit={handleSubmit} className="">
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br></br>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <br />
        <button className="btn mt-5">Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
