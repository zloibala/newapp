import "./formInput.style.css";

const FormInput = ({ label, type }) => {
  return (
    <div className="single-input">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default FormInput;

// Sign Up form
// 1st Display name
// Emal address
// password
// confirm password
