import React from 'react'
import './FaceRecognition.css';

let FaceRecognition = ({ box, imageUrl }) => <div className='center ma'>
    <div className='absolute mt2'>
        <img
            id='inputImage'
            className='br3'
            src={imageUrl} alt='' width='500px' height='auto'
        />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
</div>

export default FaceRecognition

// http://www.mangatplasticsurgery.com/wp-content/uploads/2017/02/iStock-517413388.jpg