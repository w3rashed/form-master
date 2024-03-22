import { useState } from "react";
import "./App.css";
import CustomHookForm from "./Compunents/CustomHookForm/CustomHookForm";
import RefForm from "./Compunents/RefForm/RefForm";
import ReuseableForm from "./Compunents/ReuseableForm/ReuseableForm";
import SimpleFrom from "./Compunents/SimpleFrom/SimpleFrom";
import StateFullFrom from "./Compunents/StateFullFrom/StateFullFrom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto grid justify-center">
        <h1 className="text-5xl mb-5">From Master</h1>

        <SimpleFrom></SimpleFrom>

        <StateFullFrom></StateFullFrom>

        <RefForm></RefForm>
        <CustomHookForm></CustomHookForm>
        <ReuseableForm fromTitle={"Sign Up"}></ReuseableForm>
        <ReuseableForm fromTitle={"Profile Update"}></ReuseableForm>
      </div>
    </>
  );
}

export default App;
