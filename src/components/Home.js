import React from 'react';
import stats from '../stats.PNG'
import gym from '../default1.png'

const Home = () => {
    return (
        <div className="body" id="home">
            <div className="body-wrap">
                <div className="body-text">
                    <img className="home-image" src={gym} ></img>
                    <p className="body-title-text">Record every workout <br></br> Track progression as precisely as possible</p>
                </div>
                <div className="body-image">
                    <img src={stats} className="phone-image" alt="phone demo" />
                </div>
            </div>
        </div>
    );
};

export default Home;