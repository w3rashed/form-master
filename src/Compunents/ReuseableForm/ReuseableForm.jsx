import React from "react";

const ReuseableForm = ({ fromTitle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" text-center my-6">
      <div className="text-center">
        <p className="text-green-500">Reuseable Form</p>
        <h2 className="text-4xl my-4">{fromTitle}</h2>
      </div>
      <form onSubmit={handleSubmit} className="">
        <input
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

export default ReuseableForm;
