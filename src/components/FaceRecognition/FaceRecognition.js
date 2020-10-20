import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box }) => {
    return (
        <div className= 'absolute origin--center ma'> 
            <div className='center mt2' >
                    <img  id='inputimage' alt='' src={imgUrl} width='500px' height='auto' /> 
                    <div className='bounding-box'  style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}    ></div>
            </div>
        </div>
    );
 }

 export default FaceRecognition;