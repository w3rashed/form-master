import "./App.css";
// import CustomHookForm from "./Compunents/CustomHookForm/CustomHookForm";
// import RefForm from "./Compunents/RefForm/RefForm";
// import SimpleFrom from "./Compunents/SimpleFrom/SimpleFrom";
// import StateFullFrom from "./Compunents/StateFullFrom/StateFullFrom";
import ReuseableForm from "./Compunents/ReuseableForm/ReuseableForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("Profile update", data);
  };
  return (
    <>
      <div className="container mx-auto grid justify-center">
        <h1 className="text-5xl mb-5">From Master</h1>
        {/* <SimpleFrom></SimpleFrom> */}
        {/* <StateFullFrom></StateFullFrom> */}
        {/* <RefForm></RefForm> */}
        {/* <CustomHookForm></CustomHookForm> */}
        <ReuseableForm handleSubmit={handleSignUpSubmit} fromTitle={"Sign Up"}>
          <div>
            <h2>sign up</h2>
            <p>Please sign up right now.</p>
          </div>
        </ReuseableForm>
        <ReuseableForm
          handleSubmit={handleUpdateProfile}
          fromTitle={"Profile Update"}
          submitBtnText={"Update"}
        >
          <div>
            <h2>Update Profile</h2>
            <p>Always keep Your profile updated.</p>
          </div>
        </ReuseableForm>
      </div>
    </>
  );
}

export default App;
