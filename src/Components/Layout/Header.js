import React, { Fragment } from "react";
import headerimage from './../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{


return<Fragment>
    <header className={classes.header}>
        <h1>Hungry</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={headerimage} alt="A Healthy Salad Bowl!"/>
    </div>
</Fragment>
};

export default Header;