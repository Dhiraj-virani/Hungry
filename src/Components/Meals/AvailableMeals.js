import React from "react";
import classes from './AvailableMeals.module.css';
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

    const mealsList = DUMMY_MEALS.map((meals) => { return <li>{meals.name}</li>});

      return<section className={classes.meals}>
          <ul>{mealsList}</ul>
      </section>
  };

  export default AvailableMeals;