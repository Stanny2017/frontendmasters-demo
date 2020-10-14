import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css'

function Carousel() {

    const _imgs = [
        "https://img01.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_07a3a0d0aa964f9b835262bd2e84a355",
        "https://img04.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_59d7d81334224acf9cb8d46a4786cd2b",
        "https://img01.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=1080_563_b367837fc1fa4b889955c8e539ff70d0",
        "https://img03.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=897_383_30cc65e486d14d1ca26b7be572814673",
        "https://img03.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_18c34973135a40d8ade1eb1dae8c531e",
        "https://img04.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_d48f33fc2d97433496f08436da4ffa82",
    ]

    const lastIndex = _imgs.length - 1;
    const imgs = [_imgs[lastIndex]].concat(_imgs).concat(_imgs[0]);

    useEffect(() => {

    }, [])

    return (
        <div className="carousel-wrap">
            <ul className="img-list">
                {
                    imgs.map(item => (
                        <li>
                            <img src={item} alt="carousel-item" />
                        </li>
                    ))
                }
            </ul>

            {/* <div className="img-index">
                <ul>
                    {
                        imgs.map((_, index) => (
                            <li className={index === currentIndex ? 'current dots' : 'dots'}></li>
                        ))
                    }
                </ul>
            </div> */}
        </div>
    )
}

render(<Carousel />, document.getElementById('root'))