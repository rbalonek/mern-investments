import { useState, useEffect } from "react";
import "./App.css";
import { getInvestments } from "./services/investments";

function App() {
  const [allInvestments, setAllInvestments] = useState([]);

  useEffect(() => {
    const fetchInvestments = async () => {
      const investments = await getInvestments();
      setAllInvestments(investments);
    };
    fetchInvestments();
  }, []);
  console.log(allInvestments);
  console.log("TEST");
  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
}

export default App;
