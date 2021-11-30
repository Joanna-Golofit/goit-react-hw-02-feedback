import Button from "./components/button/Button";

const name = "Joanna";
const element = <p>Witaj, {name}</p>;

function App() {
  return (
    <>   
      {element}
      <h1>Please leave feedback</h1>
      <Button label="Good" />
      <Button label="Neutral" />
      <Button label="Bad" />
      {/* <Button />
      <Button /> */}
    </>
  );
}

export default App;
