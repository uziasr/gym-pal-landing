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
            title: "Exercise",
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

    return (
        <div className="feature-section">
            <p className="feature-section-title">Let's Workout.</p>
            <div className="features-wrap">
                <div onClick={() => active > 0 ? onArrowPress(-1) : null}><FaArrowCircleLeft style={{ fontSize: "50px", color: active > 0 ? "white" : "grey", cursor: "pointer" }} /></div>
                {features.length > 0 ?
                    <div className="feature">
                        <p className="feature-title">{features[active].title}</p>
                        <p>{features[active].description}</p>
                        <img className="feature-image" src={features[active].image} alt={features[active].title} />
                    </div>
                    : null}
                <div onClick={() =>  active < 2 ? onArrowPress(1) : null}><FaArrowCircleRight style={{ fontSize: "50px", color: active < 2 ?  "white": "grey" , cursor: "pointer" }} /></div>

            </div>
        </div>
    );
};

export default Features;