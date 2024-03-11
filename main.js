const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  return (
    <div className="counter">
      <button>+</button>
      <h2>0</h2>
      <button>-</button>
      <button>C</button>
      <button>X</button>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <h1 className="title">Today : {new Date().toDateString()}</h1>
      <br />
      <h1 className="Sum">Sum = 0</h1>
      <br />
      <button>Add Couter</button>
      <Counter />
    </div>
  );
}

root.render(<App />);