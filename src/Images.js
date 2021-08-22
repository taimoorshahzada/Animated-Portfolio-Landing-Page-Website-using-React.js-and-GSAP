import React, {useRef, useEffect} from 'react'
import './Images.css'
function Images({timeline, ease}) {
    let image1 = useRef(null);
    let image2 = useRef(null);
    let image3 = useRef(null);
    useEffect(()=>{
        timeline.from(image1, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image1, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1.2");
        timeline.from(image2, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image2, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1");
        timeline.from(image3, 1.2, {
            y: 1200,
            ease: ease,
            opacity: 0
        },"-=1")
        .from(image3, 2, {
            scale: 1.6,
            ease: ease
        }, "-=1");
    })
    return (
        <div>
            <div className="images">
                <div className="box1" ref= {el=> image1 =el}></div>
                <div className="box2" ref= {el=> image2 =el}></div>
                <div className="box3" ref= {el=> image3 =el}></div>
            </div>
        </div>
        )
}

export default Images
