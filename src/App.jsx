import "./app.style.css";
import MyButton from "./components/mybutton/MyButton";
import CustomForm from "./components/customForm/CustomForm";
import FormInput from "./components/formInput/FormInput";

function App() {
  const onClickHandler = () => {
    console.log("button is clicked");
  };

  return (
    <div className="App">
      {/* <h3> 0 </h3>
      <button onClick={onClickHandler}> add +1 </button> */}
      <CustomForm />
    </div>
  );
}

export default App;
