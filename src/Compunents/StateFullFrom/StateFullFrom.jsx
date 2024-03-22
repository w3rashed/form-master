import { useState } from "react";

const StateFullFrom = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
    // console.log(email, name);
    // console.log(password);
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div className="flex text-center">
      <form onSubmit={handleSubmit} className="">
        <p className="text-green-500">State Full Form</p>
        <input
          required
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br></br>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        <input
          onChange={handlePasswordChange}
          required
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs mt-3"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <br />
        <button className="btn mt-2">Submit</button>
      </form>
    </div>
  );
};

export default StateFullFrom;
