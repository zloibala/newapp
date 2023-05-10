import "./customForm.style.css";
import FormInput from "../formInput/FormInput";
import MyButton from "../mybutton/MyButton";

const CustomForm = () => {
  return (
    <form className="Sign-Up-Form">
      <FormInput label=" Display Name" type=" text" name="name" />
      <FormInput label=" Email " type=" email" name="email" />
      <FormInput label=" Password " type="Password" name="password" />
      <FormInput label="Confirm Password " type="Password" name="password" />
      <FormInput label="" type="Checkbox" />
      <MyButton name="Submit" type="medium" />
    </form>
  );
};

export default CustomForm;
