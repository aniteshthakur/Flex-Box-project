import classes from './HotelView.module.scss';
import React from 'react'
import styled from "styled-components"
import Description from "./Description"
function HotelView() {
    return (
        <Container>
            <div className={classes.gallery}>
                <figure className={classes.gallery__item}>
                    <img src="img/hotel-1.jpg" alt="Photo of hotel 1" className={classes.gallery__photo} />
                </figure>
                <figure className={classes.gallery__item}>
                    <img src="img/hotel-2.jpg" alt="Photo of hotel 2" className={classes.gallery__photo} />
                </figure>
                <figure className={classes.gallery__item}>
                    <img src="img/hotel-3.jpg" alt="Photo of hotel 3" className={classes.gallery__photo} />
                </figure>
            </div>
            <div className={classes.overview}>
                <h1 className={classes.overview__heading}>
                    Hotel Las Palmas
                </h1>
                <div className={classes.overview__stars}>
                    <svg className={classes.overview__icon_star}>
                        <use xlinkHref="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className={classes.overview__icon_star}>
                        <use xlinkHref="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className={classes.overview__icon_star}>
                        <use xlinkHref="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className={classes.overview__icon_star}>
                        <use xlinkHref="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className={classes.overview__icon_star}>
                        <use xlinkHref="img/sprite.svg#icon-star" />
                    </svg>
                </div>
                <div className={classes.overview__location}>
                    <svg className={classes.overview__icon_location}>
                        <use xlinkHref="img/sprite.svg#icon-location-pin" />
                    </svg>
                    <button className={classes.btn_inline}>Albufeira, Portugal</button>
                </div>
                <div className={classes.overview__rating}>
                    <div className={classes.overview__rating_average}>8.6</div>
                    <div className={classes.overview__rating_count}>429 votes</div>
                </div>
            </div>

            <Description />
            <div className={classes.cta}>
                <h2 className={classes.cta__book_now}>
                    Good news! We have  4 free rooms for your selected dates!
                </h2>
                <button className={classes.btn}>
                    <span className={classes.btn__visible}>Book now</span>
                    <span className={classes.btn__invisible}>Only 4 rooms hav left</span>
                </button>
            </div>
        </Container>
    )
}

export default HotelView
const Container=styled.main`
    background-color:#fff;
    flex:1;
  
`;
