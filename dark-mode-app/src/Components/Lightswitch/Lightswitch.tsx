import React, {useContext} from 'react';
import {DarkModeContext} from '../DarkModeContext/DarkModeContext';

import Light from './lightswitch-on.png'
import LightOff from './lightswitch-off.png'


function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ? 
            Light : LightOff} alt="Lightswitch on" onClick={handleClick}/>          
        </div>
    )
}


export default Lightswitch