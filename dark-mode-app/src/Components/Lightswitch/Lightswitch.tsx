import React, {useContext} from 'react';
import {DarkModeContext} from '../DarkModeContext/DarkModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import './Lightswitch.css'


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
                
            <div className={darkMode ? "dark-mode-active" : "dark-mode"}>
                <button className='btn-dark-mode'>
                <WbSunnyIcon className="dmIconS" style={{display: darkMode ? "none" : "block"}}/>
                <Brightness2OutlinedIcon className="dmIconM"  style={{display: darkMode ? "block" : "none"}}/>
                </button>
            </div>    
        </div>
    )
}
export default Lightswitch