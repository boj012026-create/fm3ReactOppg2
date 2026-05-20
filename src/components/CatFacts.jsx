import { useState, useEffect } from "react";
import catFactApi from "../services/catFactApi.js";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [facts, setFacts] = useState([]);
  
  catFactApi.getRandFacts(5)
    .then(f => setFacts(f));

  useEffect( () => {
  },[facts])
  
  catFactApi.getRandFacts(5)
    .then(data => console.log(data));


 return (
   <h3>cat facts</h3>
 )  
}
