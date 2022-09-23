import React, { useState, useContext, useEffect } from 'react'
import { HeroContext } from '../../index';

import Rating from './Rating';

const SkillsItem = ({classes, name, skills, maxParam}) => {

    const {hero} = useContext(HeroContext)

    const [localSkills, setLocalSkills] = useState(skills)

    // Находим нужный скилл и повышаем уровень на один
    const upgrade = (id) => {
        if (localSkills[id].level < 10 && localSkills[id].level < maxParam){
            setLocalSkills(localSkills.map(skill => skill.id == id ? {...skill, 'level': skill.level + 1} : skill))
        }
    }

    useEffect(() => {

        // Ограничение количества навыков позволяет так сделать,
        // а вообще не лучшая реализация
        if (name == 'Сила') hero.setSkillsPower(localSkills)
        if (name == 'Ловкость') hero.setSkillsFast(localSkills)
        if (name == 'Интеллект') hero.setSkillsBrain(localSkills)
        if (name == 'Харизма') hero.setSkillsCharisma(localSkills)

    }, [localSkills])

    useEffect(() => {
        setLocalSkills(skills)
    }, [skills])

    return (
        <div className='skills__item'>

            <div className={`skills__item__name ${classes}`}>{name}</div>

            <div className='skills_item__list'>

                {localSkills.map(skill => 

                    <li className='skillOne' onClick={() => upgrade(skill.id)} key={skill.id}>

                        <div className='skillOne__level'>{skill.level}</div>

                        <div className='skillOne__info'>

                            <div className='skillOne__rating'>

                                <Rating
                                    level={skill.level}
                                />
                                
                            </div>

                            <div className='skillOne__name'>{skill.name}</div>

                        </div>
            
                    </li>

                )}


            </div>

        </div>
    );
}

export default SkillsItem;
