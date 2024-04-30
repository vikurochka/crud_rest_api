import React from 'react';
import preloader from '../../../assets.image/200.gif'

const Preloader = () => {
    return (
        <div style={ {backgroundColor: "white"} }>
            <img src={preloader}/>
        </div>
    )
}
export default Preloader;