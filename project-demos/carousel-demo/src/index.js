import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';


/**
 * 轮播图
 * 1. 自动轮播
 * 2. hover时停止轮播
 * 3. 可以手动轮播
 */

function Carousel() {
    let imgWrapper;

    const _imgs = [
        "https://img01.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_07a3a0d0aa964f9b835262bd2e84a355",
        "https://img04.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_59d7d81334224acf9cb8d46a4786cd2b",
        "https://img01.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=1080_563_b367837fc1fa4b889955c8e539ff70d0",
        "https://img03.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=897_383_30cc65e486d14d1ca26b7be572814673",
        "https://img03.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_18c34973135a40d8ade1eb1dae8c531e",
        "https://img04.sogoucdn.com/v2/thumb/retype/ext/auto/?appid=200698&name=980_340_d48f33fc2d97433496f08436da4ffa82",
    ]

    const imgsLen = _imgs.length;

    const lastIndex = imgsLen - 1;
    const imgs = [_imgs[lastIndex]].concat(_imgs).concat(_imgs[0]);

    useEffect(() => {
        makeImgsSwipe();
    }, []);


    /**
     * 核心逻辑： 
     * 当处于拼接的边界位置时，应在下一次滑动之前及时调整会当前的位置（durantion 设为0 无缝切换）
     */
    const swipeImg = () => {
        const styleLeft = window.getComputedStyle(imgWrapper).getPropertyValue('left'); // -500
        const leftVal = parseInt(styleLeft)
        console.log(leftVal)

        const whichIndex = -leftVal / 500 - 1; // 0
        console.log(whichIndex + 1) // 当前是第几张  已经停留3秒   即将滑向 whichIndex + 1 

        if (whichIndex === imgsLen - 1) {
            // imgWrapper.style.transitionDuration = '800ms'
            imgWrapper.style.left = (leftVal - 500) + 'px';

            // 处于第一张 ，无缝校正位置
            setTimeout(() => {
                imgWrapper.style.transitionDuration = '0ms'
                imgWrapper.style.left = 1 * (-500) + 'px';
            }, 800)

            setTimeout(() => imgWrapper.style.transitionDuration = '800ms', 810)

        } else {
            // imgWrapper.style.transitionDuration = '800ms'
            imgWrapper.style.left = (leftVal - 500) + 'px';
        }

    }

    function makeImgsSwipe() {
        setInterval(() => {
            swipeImg();
        }, 1000);
    }

    return (
        <div className="carousel-wrap">
            <ul className="img-list" ref={ref => imgWrapper = ref}>
                {
                    imgs.map((item, index) => (
                        <li key={index}>
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