import React, { useEffect, useState, useRef } from "react";

const TodoItem = (props) => {
  const refCount = React.useRef(0);
  refCount.current++;
  return (
    <p key={props.id}>
      {props.id} <span style={{ background: "red" }}>{refCount.current}</span>
    </p>
  );
};
const MemorizeTodoItem = React.memo(TodoItem);

function App() {
  const [time, setTime] = useState();
  const [list, setList] = useState([
    { id: "aaa", name: "aaa" },
    { id: "bbb", name: "bbb" },
    { id: "ccc", name: "ccc" },
    { id: "ddd", name: "ddd" },
  ]);
  const parentStateKeepChange = () => {
    setInterval(() => {
      setTime(new Date().getSeconds());
    }, 1000);
  };
  const addList = () => {
    let id = new Date().getSeconds();
    setList((state) => {
      return [...state, { id: id, name: id }];
    });
  };

  const handleSomething = () => {
    return 1;
  };

  const handleSomethingWithCallback = React.useCallback(() => {
    return 1;
  });
  useEffect(() => {}, []);
  return (
    <div>
      <button onClick={addList}>add</button>
      <button onClick={parentStateKeepChange}>Keep change parent</button>
      <div style={{ display: "flex" }}>
        {/* <div>
          <p>---Nothing---</p>
          {list.map((item) => (
            <TodoItem id={"n" + item.id} name={item.name} someObject={handleSomething} />
          ))}
        </div> */}

        <div>
          <p>---MEMO---</p>

          {list.map((item) => (
            <MemorizeTodoItem id={"M" + item.id} name={item.name} someObject={handleSomething} />
          ))}
        </div>

        {/* <div>
          {" "}
          <p>---MEMO+callback----</p>
          {list.map((item) => (
            <MemorizeTodoItem id={"a" + item.id} name={item.name} someObject={handleSomethingWithCallback} />
          ))}
        </div> */}
      </div>

      {/* {time} */}
    </div>
  );
}

export default App;
