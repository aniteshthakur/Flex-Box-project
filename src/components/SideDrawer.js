import classes from './SideDrawer.module.scss';
import React from 'react';
import styled from "styled-components";
function SideDrawer() {
    return (
        <Nav>
            <ul className={classes.sideNav}>
            <li className={[classes.sideNav__item,classes.sideNav__item_active].join(' ')}>
                <a href="#" className={classes.sideNav__link}>
                    <svg className={classes.sideNav__icon}>
                        <use xlinkHref="img/sprite.svg#icon-home" />
                    </svg>
                    <span>Hotel</span>
                </a>
                
            </li>
            <li className={classes.sideNav__item}>
                <a href="#" className={classes.sideNav__link}>
                    <svg className={classes.sideNav__icon}>
                        <use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />
                    </svg>
                    <span>Flights</span>
                </a>
                
            </li>
            <li className={classes.sideNav__item}>
                <a href="#" className={classes.sideNav__link}>
                    <svg className={classes.sideNav__icon}>
                        <use xlinkHref="img/sprite.svg#icon-key" />
                    </svg>
                    <span>Car rental</span>
                </a>
                
            </li>
            <li className={classes.sideNav__item}>
                <a href="#" className={classes.sideNav__link}>
                    <svg className={classes.sideNav__icon}>
                        <use xlinkHref="img/sprite.svg#icon-map" />
                    </svg>
                    <span>tours</span>
                </a>
                
            </li>


            </ul>
            <div class={classes.legal}>
                &copy; 2021 by trillo.All rights reserved.
            </div>
        </Nav>
    )
}

export default SideDrawer;
const Nav=styled.nav`
    background-color:#333;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    flex:0 0 18%;
`;
