import React from 'react'

const BaseParam = ({classes, param, setParam}) => {

    const clear = (value) => {
       
        // Позволяю помимо изменения с помощью стрелочек
        // вводить с клавиатуры, но при этом только
        // доступные значения
        if (Number.isInteger(+value) === true){
            if (value.length > 1  && value !== '10'){
                setParam(0)
            } else {
                setParam(+value)
            }
        }

    }
    
    return (
      <div className={`parameters__base__item ${classes}`}>
          <input
              type='number'
              min='0'
              max='10'
              value={param}
              className='parameters__base__item__input'
              onChange={e => clear(e.target.value)}
          />
      </div>
    );
}

export default BaseParam;
