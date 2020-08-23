import React from 'react';
import splits from '../splits.PNG'
import exercise from '../exercise.PNG'
import sets from '../sets.PNG'


const Features = () => {
    return (
        <div>
            <div>
                <p>Split</p>
                <p>Select the split you will be training that can target up to 9 muscles</p>Select
                <img src={splits}/>
            </div>
            <div>
                <p>Exercise</p>
                <p>Choose between 90 exercises</p>
                <img src={exercise}/>
            </div>
            <div>
                <p>Sets</p>
                <p>Record the weight and repetitions for every set</p>
                <img src={sets}/>
            </div>
        </div>
    );
};

export default Features;