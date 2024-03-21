import React from "react";

const SimpleFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log("from submited");
  };

  return (
    <div className="flex text-center">
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
        <button className="btn mt-5">Submit</button>
      </form>
    </div>
  );
};

export default SimpleFrom;
