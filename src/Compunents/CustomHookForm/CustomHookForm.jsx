import React from "react";
import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
  const [name, handleNameChange] = useInputState("rashed");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from data", name);
  };
  return (
    <div className="flex text-center">
      <form onSubmit={handleSubmit} className="">
        <p className="text-green-500">Custom hook Form</p>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <input
          type="number"
          name="number"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <br />
        <button className="btn mt-5">Submit</button>
      </form>
    </div>
  );
};

export default CustomHookForm;
