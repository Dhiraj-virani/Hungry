import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals,setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[httpError, setHttpError] = useState(null);
useEffect(() => {
  const fetchMeals = async () => {
   const response = await fetch('https://hungry-9623e-default-rtdb.firebaseio.com/meals.json');
  
  if(!response.ok){
    throw new Error('Unable to fetch any Data');
  }
   const responseData = await response.json();

   const loadedMeals = [];

   for(const key in responseData){
     loadedMeals.push({
       id : key,
       name: responseData[key].name,
       description: responseData[key].description,
       price: responseData[key].price,
     });
   }

   setMeals(loadedMeals);
   setIsLoading(false);
  };

  fetchMeals().catch((error) => {
    setIsLoading(false);
    setHttpError(error.message);
  }); 

},[]);
  
if(isLoading){
  return(<section className={classes.mealsLoading}>
    <p>Loading....</p>
  </section>)
}

if(httpError){
  return<section className={classes.mealError}>
    <h3>{httpError}</h3>
  </section>
}

  const mealsList = meals.map((meals) => {
    return (   
      <MealItem
        key={meals.id}
        id={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
     <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
