import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: " Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Pepproni, Cheese Pizza!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Burrito",
    description: "Beans, Brown Rice, Veggies",
    price: 8.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => {
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
