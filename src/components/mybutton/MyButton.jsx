import "./myButton.style.css";

const MyButton = ({ name, type }) => {
  const onClickHandler = () => {
    alert(`${name} You info is submitted!`);
  };

  return (
    <button className={`${type}`} onClick={onClickHandler}>
      {" "}
      {name}{" "}
    </button>
  );
};
export default MyButton;
