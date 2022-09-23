import React, {useState, useContext, useEffect} from 'react'
import {HeroContext} from '../index'
import { observer } from 'mobx-react-lite'

import editIcon from '../interface/img/icons/edit.svg'

import AvatarHero from './AvatarHero'


const CharacterMenu = observer(() => {

    const {hero} = useContext(HeroContext)

    const [name, setName] = useState(hero.name)

    const changeName = () => {
        const nameInput = document.body.querySelector('.characterMenu__name__input')

        nameInput.disabled = nameInput.disabled === true ? false : true

        nameInput.classList.toggle('characterMenu__name__input--editActive')
    }

    // Заменяем hero на импортированного
    const changeHero = (data) => {
        hero.setName(data._name)
        hero.setPower(data._power)
        hero.setFast(data._fast)
        hero.setBrain(data._brain)
        hero.setCharisma(data._charisma)
        hero.setSkillsPower(data._skillsPower)
        hero.setSkillsFast(data._skillsFast)
        hero.setSkillsBrain(data._skillsBrain)
        hero.setSkillsCharisma(data._skillsCharisma)
    }

    // Сохраняем/скачиваем
    const save = () => {
        const heroObj = hero

        const data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(heroObj));
        let saveBlock = document.getElementById('saveHero-id');
        saveBlock.setAttribute("href", data);
        saveBlock.setAttribute("download", `MyHero_${name}.json`);
    }

    // Получаем json, парсим, отдаем в changeHero
    const download = (e) => {
        let reader = new FileReader()
        reader.readAsText(e.target.files[0]);
        
        reader.onload = function () {
            const data = JSON.parse(reader.result)
            changeHero(data)
        }

    }

    useEffect(() => {
        hero.setName(name)
    }, [name])
    
    useEffect(() => {
        setName(hero.name)
    }, [hero.name])

    return (
        <section className='characterMenu'>

            <div className='characterMenu__name'>

                <input 
                    type='text'
                    value={name}
                    className='characterMenu__name__input'
                    onChange={e => setName(e.target.value)}
                    disabled
                />
                
                <div className='characterMenu__name__edit' onClick={changeName}>
                    <img src={editIcon} />
                </div>

            </div>

            <div className='characterMenu__avatar'>
                <h3>Нажмите, чтобы ударить</h3>
                <AvatarHero />
            </div>

            <div className='characterMenu__buttons'>

                <a id='saveHero-id'>
                    <button className='characterMenu__buttons__btn btn_save' onClick={save}>
                        Сохранить
                    </button>
                </a>

                <input className='characterMenu__buttons__btn__inputFile' accept='.json' id='download-id' type='file' onChange={e => download(e)}/>
                <label className='characterMenu__buttons__btn btn_load' htmlFor='download-id'>
                    Загрузить
                </label>

            </div>
        </section>
    );
})

export default CharacterMenu;
