import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Name :{name}</h1>
      <h2>Count : {count}</h2>
    </div>
  );
};

export default User;
