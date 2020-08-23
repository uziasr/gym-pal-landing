import React from 'react';
import stats from '../stats.PNG'

const Home = () => {
    return (
        <div className="body" id="home">
            <div className="body-image">
                <img src={stats} className="phone-image" alt="phone demo" />
            </div>
            <div className="body-text">
                <p className="body-title-text">GYM PAL</p>
                <p>Record all your workouts and track your progression as precisely as possible</p>
            </div>
        </div>
    );
};

export default Home;