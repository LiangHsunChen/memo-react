import { useState, useEffect, useRef } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} remove={setData} />
    </div>
  );
};

export default Home;
