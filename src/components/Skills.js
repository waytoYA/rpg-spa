import React, { useContext } from 'react'
import { HeroContext } from '../index';
import { observer } from 'mobx-react-lite';

import SkillsItem from './UI/SkillsItem';


const Skills = observer(() => {

    //  Компонент обёрнут в обсервер по причине того,
    //  что пришло время следить за изменениями базовых
    //  параметров. Ибо они напрямую влияют на
    //  максимальное значение скилов. Без mobx этот компонент 
    //  не мог обновлять значения maxParam при изменении hero
    const {hero} = useContext(HeroContext)

    return (
        <section className='skills'>
            
            <div className='title'>
                <span>Твои навыки</span>

                <div data-text='Для улучшения навыка нажмите по нему! Персонаж овладевает навыком навсегда.
                                Каждый навык имеет свой уровень, обозначенный в количестве звездочек; 0 - нетренированный;
                                1 - новичок; 2 - ученик; 3 - адепт; 4 - эксперт; 5 - мастер'>
                    <svg className='vopros' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"/><path d="M13,15H11v-.743a3.954,3.954,0,0,1,1.964-3.5,2,2,0,0,0,1-2.125,2.024,2.024,0,0,0-1.6-1.595A2,2,0,0,0,10,9H8a4,4,0,1,1,5.93,3.505A1.982,1.982,0,0,0,13,14.257Z"/><rect x="11" y="17" width="2" height="2"/></g></svg>
                </div>
                
            </div>

            <SkillsItem 
                classes='item__name__power'
                name='Сила'
                skills={hero.skillsPower}
                maxParam={hero.power}
            />

            <SkillsItem 
                classes='item__name__fast'
                name='Ловкость'
                skills={hero.skillsFast}
                maxParam={hero.fast}
            />

            <SkillsItem 
                classes='item__name__brain'
                name='Интеллект'
                skills={hero.skillsBrain}
                maxParam={hero.brain}
            />  

            <SkillsItem 
                classes='item__name__charisma'
                name='Харизма'
                skills={hero.skillsCharisma}
                maxParam={hero.charisma}
            /> 

        </section>
    );
})

export default Skills;
