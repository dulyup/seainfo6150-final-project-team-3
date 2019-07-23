import React from 'react'

import style from './Error.module.css';

const ErrorPage = () => {
    return (
        <div>
            <hr />
            <div  className={style.errorPage}>
                <p>The page you're looking for has moved or no longer exists.</p>
                <p>But don't worry. Even landing on a 404 page can lead to get great discovers.</p>
                <input type={"text"} placeholder={"search"} className={style.search}/><br/>
                <a href={"/"} className={style.visitHome}>Or visit the homepage</a>
            </div>
        </div>
    )
}

export default ErrorPage
