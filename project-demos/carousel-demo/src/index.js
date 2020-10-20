import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom';
import './style.css';
import _imgs from './data';

/**
 * 无动画版轮播图
 * 1. 自动轮播
 * 2. hover时停止轮播
 * 3. 可以手动轮播
 */

const imgs = _imgs;
const imgsLen = _imgs.length;

function Carousel() {
    let timer = useRef(null)
    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        autoSlide();
    }, []);

    function slideToNext() {
        if (currentIndex === imgsLen - 1) {
            currentIndex = 0;
        } else {
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
            <ul className="img-list">
                {
                    imgs.map((url, index) => (
                        <li key={index} className={currentIndex === index ? 'show' : 'hidden'}>
                            <img src={url} alt="carousel-item" />
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
                    imgs.map((_, index) => (
                        <li className={currentIndex === index ? 'current dot' : 'dot'} onClick={() => slideTo(index)}></li>
                    ))
                }
            </ul>
        </div>
    )
}

render(<Carousel />, document.getElementById('root'))