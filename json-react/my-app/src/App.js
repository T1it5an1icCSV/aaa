import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/media")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cards">
      {data.map((d, i) => (
        <div className="card" key={i}>
          <h3 className="card-title">{d.name}</h3>
          <p className="card-text">{d.description}</p>
          <img className="card-img-top" width={d.width} src={d.url} />
        </div>
      ))}
    </div>
  );
}

export default App;