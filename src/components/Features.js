import React, { useState } from 'react';
import splits from '../splits.PNG'
import exercise from '../exercise.PNG'
import sets from '../sets.PNG'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'


const Features = () => {

    const [features, setFeatures] = useState([
        {
            title: "Splits",
            description: "Select a split",
            image: splits
        },
        {
            title: "Exercises",
            description: "Choose between 90 exercises",
            image: exercise
        },
        {
            title: "Sets",
            description: "Record weight and repetitions",
            image: sets
        }
    ])

    const [active, setActive] = useState(0)

    const onArrowPress = (num) => {
        console.log("helllo")
        setActive(() => active + (num))
    }

    // const changeFeature = () => {

    // }

    return (
        <div className="feature-section">
            {/* <p className="feature-section-title">Let's Workout.</p> */}
            <div className="feature-root-wrap">
                <div className="features-wrap">
                    {/* <div onClick={() => active > 0 ? onArrowPress(-1) : null}><FaArrowCircleLeft style={{ fontSize: "50px", color: active > 0 ? "white" : "grey", cursor: "pointer" }} /></div> */}
                    {features.length > 0 ?
                        <div className="feature">
                            {/* <p className="feature-title">{features[active].title}</p> */}
                            <p>{features[active].description}</p>
                            <img className="feature-image" src={features[active].image} alt={features[active].title} />
                        </div>
                        : null}
                    {/* <div onClick={() => active < 2 ? onArrowPress(1) : null}><FaArrowCircleRight style={{ fontSize: "50px", color: active < 2 ? "white" : "grey", cursor: "pointer" }} /></div> */}
                    {/* <div>
                         <p>Features</p>
                    </div> */}
                </div>
                <div className="feature-text-wrap">
                    <p className="feature-text-title">Workout Flow</p>
                    <div>
                        {features.map((feature, index) => (
                            <div onClick={()=>setActive(index)} key={index} style={index === active ? { background: "#104981", cursor:"default" } : {}} className="feature-title-wrap">
                                <p style={index === active ? { color: "white" } : {}} className="feature-title-wrap-text">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;