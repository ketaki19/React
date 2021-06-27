import { useContext } from "react";
import MyContext from "./MyContext";

const ComponentD = () => {
  const obtainedValue = useContext(MyContext);

  return <div>{obtainedValue}</div>;
};

export default ComponentD;
