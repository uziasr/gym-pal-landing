import React from 'react';
import stats from '../stats.PNG'
import gym from '../default1.png'

const Home = () => {
    return (
        <div className="body" id="home">
            <div className="body-wrap">
                <div className="body-text">
                    <p className="body-title-text">Record all your workouts <br></br> Track your progression as precisely as possible</p>
                    <img src={gym} width={"70%"}></img>
                </div>
                <div className="body-image">
                    <img src={stats} className="phone-image" alt="phone demo" />
                </div>
            </div>
        </div>
    );
};

export default Home;