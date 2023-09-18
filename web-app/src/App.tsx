import React from "react";

const App = () => {
  const [count, setCount] = React.useState(10);

  return (
    <div className="p-6">
      <h1 className="text-5xl mb-4 font-bold">Hello world!</h1>
      <p className="my-4">Count: {count}</p>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
      </p>
    </div>
  );
};

export default App;
