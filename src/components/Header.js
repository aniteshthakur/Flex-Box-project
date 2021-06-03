import React from 'react'
import styled from "styled-components";
import classes from "./Header.module.scss";
function Header() {
    return (
        <HeaderPart>
            {/* Logo for the Header */}
            <img src="img/logo.png" alt="trillo logo" className={classes.logo} />
            
            {/* Search bar */}
            <form className={classes.search}>
                <input type="text" className={classes.search__input} placeholder="Search hotels" />
                <button className={classes.search__button}>
                    <svg className={classes.search__icon}>
                        <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
                    </svg>
                    
                </button>
            </form>

            {/* Nav elements */}
            <nav className={classes.user_nav}>
            <div className={classes.user_nav__icon_box}>
                <svg className={classes.user_nav__icon}>
                    <use xlinkHref="img/sprite.svg#icon-bookmark" />
                </svg>
                <span className={classes.user_nav__notification}>7</span>
            </div>
            <div className={classes.user_nav__icon_box}>
                <svg className={classes.user_nav__icon}>
                    <use xlinkHref="img/sprite.svg#icon-chat" />
                </svg>
                <span className={classes.user_nav__notification}>7</span>
            </div>
            <div className={classes.user_nav__user}>
                <img src="img/user.jpg" alt="" className={classes.user_nav__user_photo} />
                <span className={classes.user_nav__name}>Jonas</span>
            </div>

            </nav>
        </HeaderPart>
    )
}

export default Header

const HeaderPart=styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:1.4rem;
    height:7rem;
    background-color:white;
    border-bottom:1px solid #f4f2f2;
    @media only screen and (max-width:31.25em) {
        flex-wrap:wrap;
        height:11rem;
        align-content:space-around;

    }
`;
