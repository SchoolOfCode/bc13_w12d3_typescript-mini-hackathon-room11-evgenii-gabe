import React, { useContext } from 'react'
import { DarkModeContext } from '../DarkModeContext/DarkModeContext'
import Lightswitch from '../Lightswitch/Lightswitch'

import './Container.css'

const Container = () => {

const {darkMode} = useContext(DarkModeContext)

    return (
        <div className={darkMode?  "dark-Mode-On":"dark-Mode-Off"}>
            <Lightswitch/>
        </div>
    )
}

export default Container