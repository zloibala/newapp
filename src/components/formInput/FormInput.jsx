import "./formInput.style.css";

const FormInput = ({ label, type, name }) => {
  const onChangeHandler = (e) => {
    if ("Esma" === e.target.value) {
      console.log(e);
      alert(`Hi ${e.target.value}`);
    } else {
      console.log("You are not Esma");
    }
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="single-input">
      <label>{label}</label>
      <input type={type} name={name} onChange={onChangeHandler} />
    </div>
  );
};

export default FormInput;

// Sign Up form
// 1st Display name
// Emal address
// password
// confirm password
