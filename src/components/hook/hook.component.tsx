import React, {useState, useEffect} from "react";

const useCustomHook = function () {
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    // setExample("Changed");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => console.log(users));

    console.log("useEffect");
    return function cleanup() {
      console.log("cleanup");
    };
  });
};

const Example = function () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [example, setExample] = useState("");

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  //   // setExample("Changed");

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(users => console.log(users));

  //   console.log("useEffect");
  //   return function cleanup() {
  //     console.log("cleanup");
  //   };
  // });

  useCustomHook();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Example {example}</p>
      <button onClick={() => setExample("changed again")}>
        Change example
      </button>
    </div>
  );
};

export default Example;
