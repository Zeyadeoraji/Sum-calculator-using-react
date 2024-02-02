import { useEffect, useState } from "react";
import "./App.css";

// const []

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [Add, setAdd] = useState("");
  const [msg, setmsg] = useState("");

  // logic

  useEffect(() => {
    if (Add > 0) {
      setAdd(0);
    }
  }, [num1, num2]);

  let calcSum = (Event) => {
    Event.preventDefault();
    console.log(Event);
    if (num1 === "" || num2 === "") {
      setmsg("please Enter a valid number");
    } else {
      // setAdd(parseInt(num1 + parseInt(num2)));
      const add = parseInt(num1) + parseInt(num2);

      setAdd(add);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>React Calculator</h1>
        <form onSubmit={calcSum}>
          <div>
            <label>Num1</label>
            <input
              type="text"
              placeholder="Enter a number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Num2</label>
            <input
              type="text"
              placeholder="Enter a number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="sumbit">
              Submit
            </button>
          </div>
        </form>
        <div className="center">
          {msg ? (
            <h3 style={{ color: "red" }}>{msg}</h3>
          ) : (
            <h3>Your Sum is: {Add}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
