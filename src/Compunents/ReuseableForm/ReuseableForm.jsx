import React from "react";

const ReuseableForm = ({
  fromTitle,
  handleSubmit,
  submitBtnText = "Submit",
  Children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div className=" text-center my-6">
      <div className="text-center">
        <p className="text-green-500">Reuseable Form</p>
        {Children}
      </div>
      <form onSubmit={handleLocalSubmit} className="">
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
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <br />
        <input
          className="text-lg w-56 h-12 text-black bg-green-600 my-4 rounded-full"
          type="submit"
          value={submitBtnText}
        />
      </form>
    </div>
  );
};

export default ReuseableForm;
