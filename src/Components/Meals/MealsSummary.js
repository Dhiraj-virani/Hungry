import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className ={classes.summary}>
      <h2>Every Purchase Contributes in Planting a Tree</h2>
      <p>
        With your help, we're planting over 10,000 spruce trees across the
        country, in partnership with our friends at Green Ecosystem, allowing us
        to capture 6,800 tonnes of CO2. This is just the beginning of our
        journey to keep Canada a beautiful thing.
      </p>
    </section>
  );
};

export default MealsSummary;