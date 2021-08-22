import React, {useRef, useEffect} from 'react'
import './Content.css'
function Content({timeline}) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText, btn], 1,{
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        },"-=1")
    })
    return (
        <div>
            <div className="content">
                <h1 className="content-inner-bold" ref= {el=>h1=el}>
                    <div>Hard work beats talent</div>
                    <br />
                    <div>when talent doesn't work hard.</div>
                </h1>
                <p ref= {el=>pText=el}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius quo quibusdam maxime tenetur laborum hic officia aliquid quaerat facere.

                </p>
                <button ref= {el=>btn=el}>
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Content
