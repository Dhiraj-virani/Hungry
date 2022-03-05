import React, { Fragment } from "react";
import headerimage from './../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = () =>{


return<Fragment>
    <header className={classes.header}>
        <h1>Hungry</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src={headerimage} alt="A Healthy Salad Bowl!"/>
    </div>
</Fragment>
};

export default Header;