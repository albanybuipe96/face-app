import React from 'react'
import './ImageLinkForm.css';


let ImageLinkForm = ({ onInputChange, onButtonSubmit }) => <div>
    <p className='f3 white'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
    </p>
    <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
            <input 
                className='f4 pa2 w-70 bold center ba b--purple br2 bg-transparent'
                type='text'
                placeholder='Enter a link to detect faces'
                onChange={onInputChange}
             />
            <button
                className='w-30 grow ml2 pa2 f4 bold ph3 br2 ba dib pv2 white bg-light-purple'
                onClick={onButtonSubmit}
            >
                Detect
            </button>
        </div>
    </div>
</div>

export default ImageLinkForm