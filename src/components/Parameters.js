import React, { useContext, useEffect, useState } from 'react'
import {HeroContext} from '../index'
import { observer } from 'mobx-react-lite'

// icons
import heartIcon from '../interface/img/icons/heart.svg'
import evasionIcon from '../interface/img/icons/evasion.svg'
import energyIcon from '../interface/img/icons/energy.svg'

import BaseParam from './UI/BaseParam'
import UniqueParam from './UI/UniqueParam'


const Parameters = observer(() => {

    const {hero} = useContext(HeroContext)

    const [power, setPower] = useState(hero.power)
    const [fast, setFast] = useState(hero.fast)
    const [brain, setBrain] = useState(hero.brain)
    const [charisma, setCharisma] = useState(hero.charisma)

    const [health, setHealth] = useState(hero.health) // for attack
    const [evasion, setEvasion] = useState(0)
    const [energy, setEnergy] = useState(0)

    useEffect(() => {
        setHealth(power + 3)
        hero.setPower(power)
        hero.setHealth(power + 3) // for attack
    }, [power])

    useEffect(() => {
        setEvasion(fast + 10)
        hero.setFast(fast)
    }, [fast])

    useEffect(() => {
        setEnergy(fast + brain)
    }, [fast, brain])

    useEffect(() => {
        hero.setBrain(brain)
    }, [brain])

    useEffect(() => {
        hero.setCharisma(charisma)
    }, [charisma])

    useEffect(() => {
        setHealth(hero.health)
    }, [hero.health])

    // При загрузке персонажа, обновить все параметры
    useEffect(() => {
        setPower(hero.power)
        setFast(hero.fast)
        setBrain(hero.brain)
        setCharisma(hero.charisma)
    }, [hero.power, hero.fast, hero.brain, hero.charisma])
 

    return (
        <section className='parameters'>
            
            <div className='title'>Базовые параметры</div>

            <div className='parameters__base'>

                <BaseParam 
                    classes='item__power'
                    param={power}
                    setParam={setPower}
                />

                <BaseParam 
                    classes='item__fast'
                    param={fast}
                    setParam={setFast}
                />
            
                <BaseParam 
                    classes='item__brain'
                    param={brain}
                    setParam={setBrain}
                />

                <BaseParam 
                    classes='item__charisma'
                    param={charisma}
                    setParam={setCharisma}
                />

            </div>

            <div className='parameters__unique'>
                
                <UniqueParam 
                    name='Жизненная сила'
                    classes='background-red'
                    img={heartIcon}
                    value={health}
                    max='13'
                />

                <UniqueParam 
                    name='Уклонение'
                    classes='background-blue'
                    img={evasionIcon}
                    value={evasion}
                    max='20'
                />

                <UniqueParam 
                    name='Энергичность'
                    classes='background-yellow'
                    img={energyIcon}
                    value={energy}
                    max='20'
                />
                
            </div>

        </section>
  );
})

export default Parameters;
