import { makeAutoObservable } from "mobx"

class Hero {
    constructor () {
        this._name = 'Новое имя'

        // health point | for attack
        this._health = 0
        
        // base parameters
        this._power = 0
        this._fast = 0
        this._brain = 0
        this._charisma = 0

        // skills
        this._skillsPower = [
            {'id': 0, 'level': 0, 'name': 'Атака'}
        ]
        this._skillsFast = [
            {'id': 0, 'level': 0, 'name': 'Стелс'},
            {'id': 1, 'level': 0, 'name': 'Стрельба из лука'}
        ]
        this._skillsBrain = [
            {'id': 0, 'level': 0, 'name': 'Обучаемость'},
            {'id': 1, 'level': 0, 'name': 'Выживание'},
            {'id': 2, 'level': 0, 'name': 'Медицина'},
        ]
        this._skillsCharisma = [
            {'id': 0, 'level': 0, 'name': 'Запугивание'},
            {'id': 1, 'level': 0, 'name': 'Проницательность'},
            {'id': 2, 'level': 0, 'name': 'Внешний вид'},
            {'id': 3, 'level': 0, 'name': 'Манипулирование'},
        ]

        // я оттягивал использование mobx, пока он
        // не стал необходимостью. Есть решения, при которых
        // всё будет работать и без него, но такой выбор
        // повлечет за собой потерю динамичности.
        makeAutoObservable(this)
    }

    // Для изменения свойств
    setName(name){
        this._name = name
    }
    setHealth(health){
        this._health = health
    }
    setPower(power){
        this._power = power
    }
    setFast(fast){
        this._fast = fast
    }
    setBrain(brain){
        this._brain = brain
    }
    setCharisma(charisma){
        this._charisma = charisma
    }

    setSkillsPower(skills){
        this._skillsPower = skills
    }
    setSkillsFast(skills){
        this._skillsFast = skills
    }
    setSkillsBrain(skills){
        this._skillsBrain = skills
    }
    setSkillsCharisma(skills){
        this._skillsCharisma = skills
    }

    // Для использования свойств
    get name() {
        return this._name
    }
    get health() {
        return this._health
    }
    get power() {
        return this._power
    }
    get fast() {
        return this._fast
    }
    get brain() {
        return this._brain
    }
    get charisma() {
        return this._charisma
    }

    get skillsPower() {
        return this._skillsPower
    }
    get skillsFast() {
        return this._skillsFast
    }
    get skillsBrain() {
        return this._skillsBrain
    }
    get skillsCharisma() {
        return this._skillsCharisma
    }

}

export default Hero;