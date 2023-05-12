import "./app.style.css";
import MyButton from "./components/mybutton/MyButton";
import CustomForm from "./components/customForm/CustomForm";
import FormInput from "./components/formInput/FormInput";
import CounterApp from "./components/containers/counterApp/CounterApp";

function App() {
  const onClickHandler = () => {
    console.log("button is clicked");
  };

  return (
    <div className="App">
      <CustomForm />
      <CounterApp />
    </div>
  );
}

export default App;
