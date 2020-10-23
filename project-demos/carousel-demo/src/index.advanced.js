import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom';
import _imgs from './data';
import './style.css'

const imgsLen = _imgs.length;

const imgs = [_imgs[imgsLen - 1], ..._imgs, _imgs[0]];

/**
 * 动画版轮播图
 * 通过控制left值来实现
 */

function $(selector) {
    if (selector.startsWith('.')) {
        return document.getElementsByClassName(selector.slice(1))[0]
    }
}

let imgWidth = 1000
function Carousel() {
    let timer = useRef(null)

    // currentIndex 当前指向哪一张图片
    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        init();
        autoSlide();
    }, []);

    function init() {
        // 
        $('.img-list').style.left = '-1000px';
        $('.img-list').style.width = '800%';
        // $('.img-list').style.transition='all .5s'
    }

    function animationSlide() {
        $('.img-list').style.transition = 'all .5s'
        $('.img-list').style.left = (parseInt($('.img-list').style.left) - imgWidth) + 'px';
    }

    function scilentSlide() {
        $('.img-list').style.transition = 'all 0s'
        $('.img-list').style.left = -imgWidth + 'px';
    }


    function slideToNext() {
        // 设置正确的 index
        if (currentIndex === imgsLen - 1) {
            currentIndex = 0;
            animationSlide()

        } else {
            if (currentIndex === 0) {
                scilentSlide();

                setTimeout(() => {
                    animationSlide();
                }, 0)
                // 
            } else {
                animationSlide();
            }
            currentIndex++;

        }
        setCurrentIndex(currentIndex);
    }

    function slideToPre() {
        if (currentIndex === 0) {
            currentIndex = imgsLen - 1;
        } else {
            currentIndex--;
        }
        setCurrentIndex(currentIndex);
    }

    function slideTo(index) {
        setCurrentIndex(index)
    }

    function stop() {
        if (timer.current) clearInterval(timer.current)
    }

    const autoSlide = () => {
        let timerId = setInterval(() => {
            slideToNext();
        }, 2000);

        timer.current = timerId
    }

    return (
        <div className="carousel-wrap" onMouseEnter={stop} onMouseLeave={autoSlide}>
            <ul className="img-list animate">
                {
                    imgs.map((url, index) => (
                        <li
                            key={index}
                            className="carousel-item animate"
                        >
                            <img
                                src={url}
                                alt="carousel-item"
                                className="animte-img"
                            />
                        </li>
                    ))
                }
            </ul>

            <div className="control-btns">
                <div className="pre" onClick={slideToPre}>{`<`}</div>
                <div className="next" onClick={slideToNext}>{`>`}</div>
            </div>

            <ul className="slide-pagination">
                {
                    _imgs.map((_, index) => (
                        <li
                            key={index}
                            className={currentIndex === index ? 'current dot' : 'dot'}
                            onClick={() => slideTo(index)}
                        ></li>
                    ))
                }
            </ul>
        </div>
    )
}

render(<Carousel />, document.getElementById('root'))