import "./customForm.style.css";
import FormInput from "../formInput/FormInput";
import MyButton from "../mybutton/MyButton";

const CustomForm = () => {
  return (
    <form className="Sign-Up-Form">
      <FormInput label=" Display Name" type=" text" />
      <FormInput label=" Email " type=" email" />
      <FormInput label=" Password " type="Password" />
      <FormInput label="Confirm Password " type="Password" />
      <FormInput type="Checkbox" />
      <MyButton name="Submit" type="medium" />
    </form>
  );
};

export default CustomForm;
