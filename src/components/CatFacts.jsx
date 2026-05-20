import { useState, useEffect } from "react";
import catFactApi from "../services/catFactApi.js";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [facts, setFacts] = useState([]);

  const handleFacts = (factArr) => {
      setLoading(false);
    if (factArr.length <= 0) {
      setError(true);
    } else {
      setFacts(factArr);
      console.log(factArr);
    }
  }
  
  const getCatFacts = () => {
    catFactApi.getRandFacts(5)
      .then(f => handleFacts(f));
  }
    
  useEffect(getCatFacts, [])
  
 return (
   <>
   <h3>cat facts</h3>
     <ul>
       {loading? (<h2>Loading</h2>) : facts.map( (f, i) => (
        <li id={i}>{f.fact}</li>
       ))}
      </ul>
   {error? (<h3>Failed getting CatFacts</h3>): ""} 
   </>   
 )  
}
