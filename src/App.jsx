import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Container>
        <Flex>
          <h1 className="bg-amber-600 mx-5">Hello World !</h1>
          <h1 className="bg-amber-600 mx-5">Hello World !</h1>
          <h1 className="bg-amber-600 mx-5">Hello World !</h1>
          <div className="bg-red-900 p-5">
            <Button btnText={"Contact"} />
          </div>
        </Flex>
      </Container>
    </>
  );
}

export default App;
