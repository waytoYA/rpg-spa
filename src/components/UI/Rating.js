import React from 'react'

import starGold from '../../interface/img/icons/star-gold.svg'
import starBlack from '../../interface/img/icons/star-black.svg'

const Rating = ({level}) => {

    level = Math.ceil(level / 2)

    // Следующие конструкции созданы с целью
    // создания n раз одного элемента.
    // По причине отсутствия адекватного решения
    // в реакте, вот такая вот штука

    let goldStars = []

    for (let i = 0; i < level; i++){
        goldStars.push(i)               // i - ключ для реакта
    }

    let blackStars = []

    for (let i = 0; i < 5 - level; i++){
        blackStars.push(i)
    }

    return (
      <React.Fragment>

            {goldStars.map(i => 
                <img src={starGold} key={i}/>
            )}
            {blackStars.map(i => 
                <img src={starBlack} key={i}/>
            )}

      </React.Fragment>
    );
}

export default Rating;
