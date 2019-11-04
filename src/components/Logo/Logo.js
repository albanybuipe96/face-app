import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

let Logo = () => <div className='ma4 mt0 pointer dib'>
    <Tilt className='Tilt br4 shadow-5' options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className='Tilt-inner pa3 grow'>
            <img style={{paddingTop: '5px'}} src={brain} alt='' />
        </div>
    </Tilt>
</div>


export default Logo