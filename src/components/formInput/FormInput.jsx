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
  function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return "FizzBuzz";
    } else if (n % 3 === 0) {
      return "Fizz";
    } else if (n % 5 === 0) {
      return "Buzz";
    } else {
      return n;
    }
  }

  console.log(fizzBuzz(3));
  console.log(fizzBuzz(5));
  console.log(fizzBuzz(15));
  console.log(fizzBuzz(4));

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
