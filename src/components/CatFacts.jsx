import { useState, useEffect } from "react";
import catFactApi from "../services/catFactApi.js";
import styles from "../styles/CatFacts.module.css"; 

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
   <article className={styles.catainer}>
   <h1 className={styles.catitle}>Cat Facts</h1>
     <ul className={styles.factList}>
       {loading? (<h2>Loading</h2>) : facts.map( (f, i) => (
        <li id={i}>{f.fact}</li>
       ))}
      </ul>
   {error? (<h3>Failed getting CatFacts</h3>): ""} 
   </article>   
 )  
}
