import React, {useContext} from 'react';
import {DarkModeContext} from '../DarkModeContext/DarkModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';

import Light from './lightswitch-on.png'
import LightOff from './lightswitch-off.png'

let myIcon: React.ReactElement<SvgIconProps> = <WbSunnyIcon/>

function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ? 
            Light : LightOff} alt="Lightswitch on" onClick={handleClick}/>  
                
            <div>
                <img src={String (myIcon)} alt="Sun's icon"/>  

            </div>    
        </div>
    )
}
export default Lightswitch