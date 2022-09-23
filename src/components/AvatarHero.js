import React, { useContext } from 'react'
import {HeroContext} from '../index'

import heroImg from '../interface/img/hero.png'
import swordImg from '../interface/img/icons/sword.png'

const AvatarHero = () => {

    const {hero} = useContext(HeroContext)
    
    const attack = () => {

        // Анимация для меча при ударе
        if (hero.health > 1){
            hero.setHealth(hero.health - 1)

            let sword = document.getElementById('sword-id')
            sword.classList.add('sword-active')
    
            setTimeout(() => {
                sword.classList.remove('sword-active')
            }, 400)
        }
        
        // Анимация для healthPoint даже в случае, если оно == 1
        let healthPoint = document.body.querySelector('.unique__score')
        healthPoint.style.color = 'red';

        setTimeout(() => {
            healthPoint.style.color = 'white';
        }, 400)
    }

    // Появление и движение блока с мечом на герое
    const mouseMove = (event) => {
        let swordBlock = document.getElementById('sword-id')
        swordBlock.style.display = 'block';

        let blockImg = document.body.querySelector('.characterMenu__avatar')
        
        let coors = blockImg.getBoundingClientRect();
        let x = event.clientX - coors.left;
        let y = event.clientY - coors.top;

        swordBlock.style.left = x - 20 + 'px' ;
        swordBlock.style.top = y - 20 + 'px';

        blockImg.append(swordBlock)
    }
    
    // Убрать меч, если вышло за пределы героя
    const mouseOut = (event) => {
        let swordBlock = document.getElementById('sword-id')
        swordBlock.style.display = 'none';
    }

    return (
        <React.Fragment>
            <img 
                src={heroImg} 
                className='characterMenu__avatar__hero' 
                onMouseMove={(e)=> mouseMove(e)} 
                onMouseOut={(e) => mouseOut(e)}
                onClick={(e) => attack(e)}
            />
            <img src={swordImg} id='sword-id' />
        </React.Fragment>
    );
}

export default AvatarHero;
