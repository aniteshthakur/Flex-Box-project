import React from 'react'
import classes from "./Description.module.scss"
function Description() {
    return (
        <div className={classes.detail}>
            <div className={classes.description}>
                <p className={classes.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe.
                     Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    
                </p>
                <p className={classes.paragraph}>
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className={classes.list}> 
                    <li className={classes.list__item} >Close to the beach</li>
                    <li className={classes.list__item} >Breakfast included</li>
                    <li className={classes.list__item} >Free airport shuttle</li>
                    <li className={classes.list__item} >Free wifi in all rooms</li>
                    <li className={classes.list__item} >Air conditioner</li>
                    <li className={classes.list__item} >Pets allowed</li>
                    <li className={classes.list__item} >We speak all languages</li>
                    <li className={classes.list__item} >Perfect fo families</li>
                </ul>
                <div className={classes.recommend}>
                    <p className={classes.recommend__count}>
                        Lucy and 3 other friends recommended this hotel.
                    </p>
                    <div className={classes.recommend__friends}>
                        <img src="img/user-3.jpg" alt="Friend 1" className={classes.recommend__photo} />
                        <img src="img/user-4.jpg" alt="Friend 2" className={classes.recommend__photo} />
                        <img src="img/user-5.jpg" alt="Friend 3" className={classes.recommend__photo} />
                        <img src="img/user-6.jpg" alt="Friend 4" className={classes.recommend__photo} />

                    </div>
                </div>
            </div>
            <div className={classes.user_reviews}>
                <figure className={classes.review}>
                    <blockquote className={classes.review__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className={classes.review__user}>
                        <img src="img/user-1.jpg" alt="user 1" className={classes.review__photo} />
                        <div className={classes.review__user_box}>
                            <p className={classes.review__user_name}>Nick Smith</p>
                            <p className={classes.review__user_date}>Feb 23rd, 2017</p>
                        </div>
                        <div className={classes.review__rating}>7.8</div>
                    </figcaption>
                </figure>
                 <figure className={classes.review}>
                    <blockquote className={classes.review__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                    </blockquote>
                    <figcaption className={classes.review__user}>
                        <img src="img/user-2.jpg" alt="user 2" className={classes.review__photo} />
                        <div className={classes.review__user_box}>
                            <p className={classes.review__user_name}>Mary Thomas</p>
                            <p className={classes.review__user_date}>Sep 13th, 2017</p>
                        </div>
                        <div className={classes.review__rating}>9.3</div>
                    </figcaption>
                </figure>
                <button className={classes.btn_inline}>Show all <span>&rarr;</span></button>
            </div>  
            
        </div>
        
    )
}

export default Description
