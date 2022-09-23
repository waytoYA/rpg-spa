import React from 'react'

const UniqueParam = ({name, classes, img, value, max}) => {

    return (
        <div className='parameters__unique__item'>

            <div className={`unique__img ${classes}`}>
                <img src={img}/>
            </div>

            <div className='unique__info'>
                <span>
                    {name}
                </span>
                <progress value={value} max={max} className='unique__progress'></progress>
            </div>

            <div className='unique__score'>{value}</div>

        </div>
    );
}

export default UniqueParam;
