import { useState } from 'react';
import Leaderboard from './Leaderboard';
import AddScorePopup from './AddScorePopup';
import RecentEntry from './RecentEntry';
import { FiPlusCircle } from 'react-icons/fi';
import { TfiCup } from "react-icons/tfi";
import { AiOutlineFieldTime } from "react-icons/ai";
import "../styles/hero.css";

const Hero = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <div className="background">
            <div className="content">
                <div className="score-head">
                   <div className="cup-name">
                     <TfiCup/>
                     <h4>NAME</h4>
                   </div>
                   <div className="time-icon">
                   <AiOutlineFieldTime />
                    <h4>TIME</h4>
                   </div>
                </div>
                <div className='leader-width'>
                    <Leaderboard />
                </div>
                {isPopupOpen && <AddScorePopup closePopup={() => setPopupOpen(false)} />}
                <header className='pophero'>
                    <FiPlusCircle onClick={() => setPopupOpen(true)} />
                </header>
            </div>
        </div>
    );
}

export default Hero;
