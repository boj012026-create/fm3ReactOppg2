import { useState } from "react";
import catFactApi from "../services/catFactApi.js";

export default function CatFacts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [facts, setFacts] = useState([]);

  catFactApi.getFacts(5)
    .then(data => console.log(data));


 return (
   <h3>cat facts</h3>
 )  
}
